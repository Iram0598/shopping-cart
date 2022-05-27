import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Cart = (props) => {
    const cart = props.cart;
    const courseTotal = cart.reduce((sum,course)=> sum + course.price, 0)
    const tax = courseTotal/10;
  return (
    <div className='cart'>
        <h3>Order summary</h3>
      <h6>Total item ordered: {props.cart.length}</h6>
      <h6>Amount: {courseTotal}</h6>
      <h6>Tax: {tax}</h6>
      <h6>Total amount: {courseTotal+tax}</h6>
       <Link to="/checkout/">
       <Button variant="success">Place order</Button>
       </Link>
    </div>
  )
}

export default Cart
