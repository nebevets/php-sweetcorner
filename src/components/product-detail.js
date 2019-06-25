import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductDetail} from '../actions';
import {formatCost} from '../assets/helpers';

class ProductDetail extends Component{
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getProductDetail(id);
  }
  render(){
    const {product} = this.props;
    if (product) {
      const {name, description, cost} = product;
      return(
        <div className="product">
          <h1 className="name">{name}</h1>
          <div className="description">{description}</div>
          <div className="cost">{formatCost(cost)}</div>
        </div>
      );
    } 
    return(
      <div>Product with id: {this.props.match.params.id} not found.</div>
    );
  }
}

const mapStateToProps = (state) => {
  const {product} = state.products;
  return {
    product
  };
}

export default connect(mapStateToProps, {
  getProductDetail
})(ProductDetail);
