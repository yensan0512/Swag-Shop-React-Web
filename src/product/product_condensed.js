import React, { Component } from 'react'
import './product_condensed.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductCondensed extends Component {
    render() {
        return (
            <li className='list-group-item pc-condensed' >
                <a className='btn btn-outline-danger'>X</a>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li >
        )
    }
}

export default ProductCondensed;