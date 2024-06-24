import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4">Welcome to our E-Commerce site!</h1>
            <p className="lead">Discover our wide range of products and enjoy a seamless shopping experience.</p>
            <hr className="my-4" />
            <p>Check out our latest products and offers.</p>
            <a className="btn btn-secondary btn-lg" href="/products" role="button">Shop Now</a>
          </div>
          <div className="col-md-6 d-flex align-items-end justify-content-md-end">
            <img src='/illustration.png' alt="E-Commerce Illustration" className="img-fluid" style={{ height: '500px',maxWidth: '100%',marginTop: '-80px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
