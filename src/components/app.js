import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Route} from 'react-router-dom';
import ProductList from './product-list';
import ProductDetail from './product-detail';

const App = () => (
    <div className="container">
        <Route exact path="/" component={ProductList} />
        <Route path="/:id" component={ProductDetail} />
    </div>
);

export default App;
