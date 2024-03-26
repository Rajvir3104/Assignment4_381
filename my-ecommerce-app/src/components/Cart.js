import React from 'react';
import CartItem from './CartItem';
import './App.css';

const Cart = ({ cart, removeFromCart }) => {
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} removeFromCart={removeFromCart} />
        ))}
        <h3>Total Cost: ${totalCost}</h3>
      </div>
    </div>
  );
};

export default Cart;
