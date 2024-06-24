import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productService from '../service/productService';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    productService.getProductById(id).then(setProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(addItem({ productId: product._id, name: product.name, price: product.price, image: product.image, quantity: 1 }));
    } else {
      navigate('/login');
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>Rs. {product.price}</h3>
          <button onClick={handleAddToCart} className="btn btn-secondary">
            <i className="bi bi-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
