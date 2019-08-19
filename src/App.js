import React, { Component } from 'react';

import './App.css'
import ProductsContainer from './containers/ProductsContainer/ProductsContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ProductsContainer />
      </div>
    );
  }
}

export default App;