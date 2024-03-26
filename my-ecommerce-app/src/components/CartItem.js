import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const { image, name, price, quantity } = item;
  const totalPrice = price * quantity;

  return (
    <div className="cart-item">
      <img src={image} alt={name} style={{ width: '200px', height: '200px' }}/>
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${totalPrice}</p>
        <button onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
