import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './less/main.css';
import ProductsContainer from './containers/ProductsContainer/ProductsContainer';
import Form from './form/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={ProductsContainer} />
          <Route path="/form" component={Form} />
        </Router>
      </div>
    );
  }
}

export default App;