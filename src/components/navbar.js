import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/"><img src='/Logo.png' style={{ height: '80px', marginRight: '10px' }}></img></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/"><i class="bi bi-house"></i> Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products"> <i class="bi bi-shop"></i> Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart"><i class="bi bi-cart3"></i> Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact"><i class="bi bi-person-lines-fill"></i> Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login"><i class="bi bi-box-arrow-in-right"></i> Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
