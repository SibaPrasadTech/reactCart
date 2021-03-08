import react from 'react';
//import styled from 'styled-components';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 20px;
  border: 2px solid grey;
  padding: 5px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color : #DCE1E3;
  flex-wrap: wrap;
  box-shadow: 1px 2px #F7CAC9;
  min-width: 0;
 @media (max-width: 550px) {
      justify-content: flex-start;
  }
`;

const Styledinput = styled.input`
 {
   margin: 2px auto;
   min-width: 0;
   border: 2px outset green;
   box-shadow: 1px 2px #F7CAC9;
   padding: 1px;
 }
`;
const StyledLabel = styled.label`
 {
   margin: 2px auto;
   min-width: 0;
   /*border: 2px outset green;*/
   /*box-shadow: 1px 2px #F7CAC9;*/
   padding: 1px;

 }
`;

const InputData = (props) => {
  return (
    <StyledDiv>
      <div className='input1'>
        <StyledLabel htmlFor='itemName'>Item Name : </StyledLabel>
        <Styledinput 
          placeholder='Item Name' 
          id='itemName' 
          name='itemName'
          onChange={props.inputChangeProp}></Styledinput>
      </div>
      <div className='input2'>
        <StyledLabel htmlFor='itemQty'>Item Qty : </StyledLabel>
        <Styledinput 
          placeholder='Item Qty' 
          id='itemQty' 
          name='itemQty'
          onChange={props.inputChangeProp}></Styledinput>
        </div>
        <div className='input3'>
        <StyledLabel htmlFor='itemPrice'>Item Price : </StyledLabel>
        <Styledinput 
          placeholder='Item Price' 
          id='itemPrice' 
          name='itemPrice'
          onChange={props.inputChangeProp}></Styledinput>
        </div>
        <button className='input4' onClick={props.addToCartProp}>ADD</button>
    </StyledDiv>
  );
}
export default InputData;

/*
<label htmlFor='itemQty'>Item Quantity</label>
        <input 
          placeholder='Item Quantity' 
          id='itemQty' 
          name='itemQty'
          onChange={props.addToCartProp}></input>
        <label htmlFor='itemPrice'>Item Price</label>
        <input 
          placeholder='Item Price' 
          id='itemPrice' 
          name='itemPrice'
          onChange={props.addToCartProp}></input>
        <button type='submit'>ADD</button>
*/