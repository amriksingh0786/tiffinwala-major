import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import axios from 'axios'

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";
/* componentDidMount () {
  const script = document.createElement("script");

  script.src = "https://use.typekit.net/foobar.js";
  script.async = true;

  document.body.appendChild(script);
} */

const CheckoutPage = ({ cartItems, total }) =>{
 
const handleClick = async() => {
  const data = {
      amount: Math.floor(Number(total) * 100),
      currency: "INR",
    };

    const orderId = await axios.post('https://instant-parking.herokuapp.com/user/payment', data);

    if (orderId.data.success) {
      var options = {
        key: "rzp_test_2aFYEO0HWNiz6l",
        amount: Math.floor(Number(total) * 100),
        currency: "INR",
        name: "Tiffinwala",
        description: "Buy Food",
        image: "https://eparking-frontend-gi6m8t8zo.vercel.app/assets/logo.png",
        order_id: orderId.data.data.id,
        handler: (res) => {
         alert("Purchased");
        },
        theme: {
          color: "#3399cc",
        },
      };

      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", (res) => {
        alert(res.error.reason);
      });

      rzp1.open();
    }
}

return(
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
  

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    
    <div className="total">
      <span>TOTAL: {total}</span>
     
    </div>
    
    <button id="checkout-button" onClick={handleClick}>Checkout</button>
    
    
  </div>
  
)};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
