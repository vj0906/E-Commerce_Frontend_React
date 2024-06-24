import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
  const cart = useSelector(state => state.cart.items);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    payment: 'Cash', // Default payment method
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      // Process payment and update order status
    alert("Yay! Order Placed Successfully");
    dispatch(clearCart());
    navigate('/');
    } else {
      alert("Please login to place order"); 
      navigate('/login');
      }
  };

  return (
    <div className="container mt-5">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Payment Method</label><br />
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="cash" name="payment" value="Cash" checked={formData.payment === 'Cash'} onChange={handleChange} />
            <label className="form-check-label" htmlFor="cash">Cash</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="netbanking" name="payment" value="Netbanking" checked={formData.payment === 'Netbanking'} onChange={handleChange} />
            <label className="form-check-label" htmlFor="netbanking">Netbanking</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="upi" name="payment" value="UPI" checked={formData.payment === 'UPI'} onChange={handleChange} />
            <label className="form-check-label" htmlFor="upi">UPI</label>
          </div>
        </div>

        <h3>Order Summary</h3>
        {cart.map(item => (
          <div key={item.productId}>
            <p>{item.name} x {item.quantity}: Rs. {item.quantity * item.price}</p>
          </div>
        ))}
        <h3>Total: Rs. {totalPrice}</h3>
        <button type="submit" className="btn btn-secondary">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
