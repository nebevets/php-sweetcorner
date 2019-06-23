import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductList} from '../actions';

class ProductList extends Component{
  componentDidMount(){
    this.props.getProductList();
  }
  render(){
    console.log('products', this.props.products);
    return(
      <div className="my-3">
        <h1 className="center">products</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.products.list
  };
}

export default connect(mapStateToProps, {
  getProductList
})(ProductList);
