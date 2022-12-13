import React, { Component } from "react";
import axios from "axios";
import 'braintree-web';
import DropIn from 'braintree-web-drop-in-react';


class Payment extends Component{
   instance;
   state={
    clientToken: null
   }

   async componentDidMount(){
    try {
        axios.get('http://localhost:7070/tokenGenerate').then(data=>{
            console.log("tokenGenerate", data)
            console.log("client token", data.data.message)
            this.setState({clientToken: data.data.message})
        }).catch(err=>{
            console.log('err', err)
        })
    } catch (error) {
        console.log("error", error.message)
        // return res.status(404).json({'Status':"failed", "message":error.message})
    }
   }
   
   async transaction(){
    try {
        this.instance.requestPaymentMethod().then(payData=>{
            console.log('paydata', payData)
            if(payData){
                let data={
                    amount: 50,
                    paymentMethodNonce: payData.nonce
                }
                console.log('sale', data)
                console.log('paymentMethodNonce', data.paymentMethodNonce)
                axios.post('http://localhost:7070/transaction', data).then(saleData=>{
                    console.log('saleData', saleData)
                })
            }
        })
    } catch (error) {
        console.log("error", error.message)
    }
   }
   
   render(){
    // console.log('state', this.state)
    console.log('ctoke', this.state.clientToken)
      if(this.state.clientToken){
       return(
        <div>
            <h3>Payment Method</h3>
            <DropIn
                    options={{ authorization: this.state.clientToken }}
                    onInstance={(instance) => (this.instance = instance)}
                />
           
            <button onClick={this.transaction.bind(this)}>Buy</button>
        </div>
    )
    }
   }
}

export default Payment;

// visa no= 4000 0200 0000 0000