import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ productId: product._id, name: product.name, price: product.price, image: product.image, quantity: 1 }));
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Rs.{product.price}</p>
          <Link to={`/product/${product._id}`} className="btn btn-secondary" style={{marginRight:'10px'}}><i class="bi bi-info-circle-fill"></i> Details</Link>
          <button onClick={handleAddToCart} className="btn btn-outline-secondary"><i class="bi bi-cart-plus"></i> Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
