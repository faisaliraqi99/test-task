import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Product from '../../components/Product';

class ProductsContainer extends Component {
  state = {
    products: null,
    productsLength: 0,
    productsView: 'grid'
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(result => this.setState({ ...this.state, products: result, productsLength: result.length }));
  }
  favChange = index => {
    const newProducts = this.state.products;
    const newObj = newProducts[index];
    const idObj = newObj.id
    newObj.isFav = !newProducts[index].isFav;
    this.setState({
      ...this.state,
      products: newProducts
    });
    const json = JSON.stringify(newObj);
    fetch(`http://localhost:3000/products/${idObj}`, {
      method: 'PUT',
      headers: {
        "Content-type": 'application/json'
      },
      body: json
    })
  }
  checkSortAndTypeView = val => {
    const selectedIndex = val.target.selectedIndex;
    val = val.target[selectedIndex].value;
    const arr = this.state.products;
    let newArr = [];
    switch (val) {
      case 'name':
        newArr = arr.sort((a,b) => {
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        })
        this.setState({newArr});
        break;
      case 'priceAsc':
        newArr = arr.sort((a, b) => {
          let newA = +a.price.slice(1);
          let newB = +b.price.slice(1);
          return newA - newB;
        });
        this.setState({ newArr });
        break;
      case 'priceDesc':
        newArr = arr.sort((a, b) => {
          let newA = +a.price.slice(1);
          let newB = +b.price.slice(1);
          return newA - newB;
        });
        newArr.reverse();
        this.setState({ newArr });
        break;
      case 'grid':
        this.setState({...this.state, productsView: val})
        break;
      case 'list':
        this.setState({...this.state, productsView: val})
        break;
      default:
        this.fetchData()
        break;
    }
  }
  render() {
    const all = () => {
      if(this.state.productsView === 'grid') {
        if (this.state.products !== null) {
          const items = this.state.products.map((item, index) => {
            return <Product listOrGrid={this.state.productsView} singleItem={item} favChange={() => this.favChange(index)} key={index} />
          });
          return items;
        } else {
          return 'Products is empty';
        }
      } else if(this.state.productsView === 'list') {
        if (this.state.products !== null) {
          const items = this.state.products.map((item, index) => {
          return <Product listOrGrid={this.state.productsView} singleItem={item} favChange={() => this.favChange(index)} key={index} />
          });
          return items;
        } else {
          return 'Products is empty';
        }
      }
    }
    return (
      <div className="products-container">
        <header className="products-header">
          <div className="products-result">{this.state.productsLength} results</div>
          <div className="products-sort">
            <Link to="/form">Link to form</Link>
            <select onChange={(event) => this.checkSortAndTypeView(event)} className="products-select">
              <option value="grid">Type: Grid</option>
              <option value="list">Type: List</option>
            </select>
            <select onChange={(event) => this.checkSortAndTypeView(event)} className="products-select">
              <option value="default">Sort by: MostRelevant</option>
              <option value="name">Sort by: Name (ascending)</option>
              <option value="priceAsc">Sort by: Price (ascending)</option>
              <option value="priceDesc">Sort by: Price (descending)</option>
            </select>
          </div>
        </header>
        <main>
          <ul className="products-list">
            {all()}
          </ul>
        </main>
      </div>
    );
  }
}

export default ProductsContainer;