import React, { Component } from "react";
import axios from "axios";
import { Button} from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';


class ListProduct extends Component{
  constructor(){
    super()
    this.ProductData = this.ProductData.bind(this)

    this.state ={
        product :[]
    }
  }


  componentDidMount(){
    this.ProductData();
}

  ProductData = async()=>{
    const productDetail = await axios.get('http://192.168.29.174:8080/api/v2/watch/getAllproduct')
    console.log("product", productDetail.data.result)
    if(productDetail.data.result.length > 0){
      this.setState({
        product:productDetail.data.result
      })
    }
  }

  indProduct = (data)=>{
    this.props.history.push("/product")
  }


  render(){
    // console.log("data", this.state.product)
    return(
      <div>
        <table className="table">
          <thead>
            <tr>
            {/* <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>warranty</th> */}
            </tr>
          </thead>
          <tbody>
            {
              this.state.product.map((data, index)=>{
                return(
                  <tr key={index}>
                  <img src={data.image} width="200" height="150"/>
                  <td><h5>Product:</h5>{data.watchBrand}<h5>Price:</h5>{data.price}<h5>Warranty:</h5>{data.warranty}</td>
                  {/* <td>{data.price}</td>
                  <td>{data.warranty}</td> */}
                  <td><Button type="button" onClick={()=>this.indProduct(data.uuid)}>view</Button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListProduct;