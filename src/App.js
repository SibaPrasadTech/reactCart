import { Component } from 'react';
import './App.css';
import InputData from './input/input.js';
import styled from 'styled-components';


class App extends Component{
  state = {
    itemObj:{
      itemName : '',
      itemQty : '',
      itemPrice : '',
      totalPrice : ''},
    itemsList : [],
    total : 0
  }

  inputChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if(name === 'itemName')
    {
      this.setState(
      {
        itemObj: {
        ...this.state.itemObj,
        [name]: value
       }
      });
    }
    else
    {
      let isValid = /^\d+$/.test(value);
      if(isValid || value === ''){
        this.setState(
        {
          itemObj: {...this.state.itemObj,[name]: parseInt(value)}
        });
      }
      else{
        alert('Enter valid numbers in Item Qty and Item Price')
      }  
    }
  }
  
  addToCartHandler = () => {
    console.log(this.state.itemObj);
    let newItem = this.state.itemObj;
    if(!( (newItem.itemQty === '') || (newItem.itemPrice === '') || (newItem.itemName === '') || (Object.values(newItem).includes(NaN)))){
      newItem.totalPrice = newItem.itemQty * newItem.itemPrice;
      this.setState(
        {
          itemsList: [...this.state.itemsList,newItem]
        }
      );
      console.log(this.state.itemsList);
      }
      else{
        alert('Empty or Invalid Quantity or Price Entered!!!');
      }
  }

  renderTableHeader = () => {
    if(this.state.itemsList.length === 0){
      return null;
    }
    let header = Object.keys(this.state.itemsList[0]);
    return header.map((key,index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    });
  }
  
  renderTableData = () => {
    return (this.state.itemsList.map((item,index) => {
      const {itemName , itemQty , itemPrice, totalPrice} = item
      return (
        <tr key={index}>
          <td>{itemName}</td>
          <td>{itemQty}</td>
          <td>{itemPrice}</td>
          <td>{totalPrice}</td>
        </tr>
      )
    }))
  }

  totalHandler = () => {
    let totalVal = 0;
    this.state.itemsList.forEach((item) => {
      console.log(item.totalPrice);
      totalVal+=item.totalPrice;
    });
    console.log(totalVal);
    this.setState({
      total : totalVal
    });
  }

  render() {
    let tablepart = null;
    if(!(this.state.itemsList.length === 0)){
      tablepart = (
        <table className='table'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><button onClick={this.totalHandler}>SUBMIT</button></td>
            </tr>
            <tr>
              <td colSpan="2">TOTAL</td>
              <td colSpan="2">{this.state.total}</td>
            </tr>
          </tbody>
      </table>
      );
    };
    return (
      <div className='App'>
      <InputData
      inputChangeProp = {this.inputChangeHandler}
      addToCartProp = {this.addToCartHandler}
      />
      {tablepart}
      </div> 
    );
  }
}

export default App;

/*
componentDidUpdate(){
    console.log(this.state.itemsList)
  }
*/