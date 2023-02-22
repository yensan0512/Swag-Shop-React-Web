import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Product from './product/product';
import HttpService from './services/http.service';
import WishList from './wishlist/wishlist';

export default () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    HttpService.getProducts().then(response => {
      const data = response.data;
      setProducts(data);
    })
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to The Swag Shop</h2>
      </div>
      <div className='container-fluid App-main'>
        <div className='row'>
          <div className='col-sm-8'>
            <div className='row'>
              {products.map((p) =>
                <div className='col-sm-4' key={p._id}>
                  <Product title={p.title} price={p.price} imgUrl={p.imgUrl} />
                </div>
              )}
            </div>
          </div>
          <div className='col-sm-4'>
            <WishList />
          </div>
        </div>
      </div>
    </div>
  )
}
