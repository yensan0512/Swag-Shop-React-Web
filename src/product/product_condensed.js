import React from 'react'
import './product_condensed.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCondensed() {
    return (
        <li className='list group-item'>
            <a className='btn btn-outline-danger'>{this.props.product.title}
                ${this.props.product.price}
            </a>
        </li>
    )
}

export default ProductCondensed;