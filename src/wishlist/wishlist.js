import React, { Component, useState, useEffect } from 'react'
import './wishlist.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCondensed from '../product/product_condensed';
import HttpService from '../services/http.service';

function WishList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        HttpService.getProducts().then(response => {
            const data = response.data;
            setProducts(data);
        })
    }, []);

    return (
        <div className='card'>
            <div className='card-block'>
                <h4 className='card-title'>Wish List</h4>
                <ul className='list-group'>
                    {products.map((p) =>
                        <ProductCondensed product={p} key={p._id} />
                    )}
                </ul>
            </div>
        </div>
    )

}

export default WishList;