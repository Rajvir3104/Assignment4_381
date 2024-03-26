import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';

const Productpage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCart([...cart, newCartItem]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.map(item =>
      item.name === itemToRemove.name ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td><ProductList addToCart={addToCart} /></td>
          <td style={{ verticalAlign: 'top' }}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
