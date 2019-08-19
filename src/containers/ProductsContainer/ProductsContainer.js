import React, { Component } from 'react';

import './ProductsContainer.css';
import Product from '../../components/Product';

class ProductsContainer extends Component {
  state = {
    products: null,
    productsLength: 0
  }
  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(result => this.setState({ ...this.state, products: result, productsLength: result.length}));
  }
  render() {
    const all = () => {
      if(this.state.products !== null) {
        const items = this.state.products.map((item,index) => {
          return <Product singleItem={item} key={index} />
        });
        // console.log(items);
        return items;
      } else {
        return 'Products is empty';
      }
    }
    return (
      <div className="products-container">
        <div className="products-header">
          <div className="products-result">{this.state.productsLength} results</div>
          <div className="products-sort">some element</div>
        </div>
        <ul className="products-list">
          {all()}
        </ul>
      </div>
    );
  }
}

export default ProductsContainer;