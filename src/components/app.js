import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Route} from 'react-router-dom';
import ProductList from './product-list';

const App = () => (
    <div className="container">
        <Route exact path="/" component={ProductList} />
    </div>
);

export default App;
