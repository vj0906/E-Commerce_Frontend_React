import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <img src='/Logo.png' style={{ height: '200px' }} alt="Logo" />
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Menu</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-white">Home</a>
              </li>
              <li>
                <a href="/products" className="text-white">Products</a>
              </li>
              <li>
                <a href="/cart" className="text-white">Cart</a>
              </li>
              <li>
                <a href="/contact" className="text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-around">
              <li>
                <a href="https://www.linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.github.com" className="text-white" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="/">ecommerce.com</a>
      </div>
    </footer>
  );
};

export default Footer;

