import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem({ productId: id }));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ productId: id, quantity }));
  };

  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.productId}>
                  <td>{item.name}</td>
                  <td><img src={item.image} style={{width: '100%',height:'150px',objectFit: 'cover'}}></img></td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value))}
                      className="form-control"
                    />
                  </td>
                  <td>Rs.{item.price}</td>
                  <td>Rs.{item.quantity * item.price}</td>
                  <td>
                    <button onClick={() => handleRemove(item.productId)} className="btn btn-outline-danger btn-sm"><i class="bi bi-trash3"></i> Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Price: Rs. {totalPrice}</h3>
          <Link to="/checkout" className="btn btn-outline-success mt-3">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
