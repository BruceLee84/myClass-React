import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';

import AddProduct from './components/Class_com/product_add';
import ListProduct from './components/Class_com/product_view';
import IndProduct from './components/Class_com/product_ind';
import Payment from './components/Class_com/payment';

class App extends Component{
  render(){
    return(
      // <ListProduct/>
      <Router>
        <div>
          <nav>
             <li>
              <Link to={"/"}>List</Link>
             </li>
             <li>
              <Link to={"/add"}>AddProduct</Link>
             </li>
          </nav>
        </div>
        <div> 
        <Switch>
          <Route exact path='/add' component = {AddProduct}/> 
          {/* <Route path='/' component ={ListProduct}/> */}
          <Route path='/' component ={Payment}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
