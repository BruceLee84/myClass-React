import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';

class AddProduct extends Component{
    constructor(){
        super()
        this.onChangewatchBrand = this.onChangewatchBrand.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangewarranty = this.onChangewarranty.bind(this);
        this.onChangecategoryUuid = this.onChangecategoryUuid.bind(this);
        this.onChangeuserUuid = this.onChangeuserUuid.bind(this);
    
    this.state = {
        watchBrand:"",
        price:"",
        warranty:"",
        categoryUuid:"",
        userUuid:""
    }
}

    onChangewatchBrand (e){
     this.setState({watchBrand:e.target.value})
    }

    onChangeprice (e){
        this.setState({price: e.target.value})
      }

    onChangewarranty (e){
        this.setState({warranty:e.target.value})
    }  

    onChangecategoryUuid (e){
        this.setState({categoryUuid:e.target.value})
    }

    onChangeuserUuid (e){
        this.setState({userUuid:e.target.value})
    }
    
    addProduct= async()=>{
        let data={
        watchBrand:this.state.watchBrand,
        price:this.state.price,
        warranty:this.state.warranty,
        categoryUuid:this.state.categoryUuid,
        userUuid:this.state.userUuid
        }
        console.log("data", data)
        const result = await axios.post('http://192.168.29.174:8080/api/v2/watch/addNewproduct', data)
        console.log("result", result)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product Added',
            showConfirmButton: false,
            timer: 1500
          })
    }

    render(){
        return(
            <Form>
                <Form.Field>
                    <label>Product Name: </label>
                    <input placeholder="product name" value={this.state.watchBrand} onChange={this.onChangewatchBrand}></input>
                </Form.Field>

                <Form.Field>
                    <label>Price: </label>
                    <input placeholder="Price" value={this.state.price} onChange={this.onChangeprice}></input>
                </Form.Field>

                <Form.Field>
                    <label>warranty: </label>
                    <input placeholder="warranty" value={this.state.warranty} onChange={this.onChangewarranty}></input>
                </Form.Field>

                <Form.Field>
                    <label>categoryUuid: </label>
                    <input placeholder="categoryUuid" value={this.state.categoryUuid} onChange={this.onChangecategoryUuid}></input>
                </Form.Field>

                <Form.Field>
                    <label>userUuid: </label>
                    <input placeholder="userUuid" value={this.state.userUuid} onChange={this.onChangeuserUuid}></input>
                </Form.Field>
                <Button type="button" onClick={this.addProduct}>Submit</Button>
            </Form>
            )
    }
    
}

export default AddProduct;