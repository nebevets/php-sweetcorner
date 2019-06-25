import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductList} from '../actions';
import {formatCost} from '../assets/helpers';

const cardStyle = {
  cursor: 'pointer'
};

class ProductList extends Component{
  componentDidMount(){
    this.props.getProductList();
  }
  handleProductClick(productId){
    this.props.history.push(`/${productId}`);
  }
  render(){
    const {products} = this.props;
    const productCards = products && products.map(product => {
      return(
        <div className="col-sm-6 mb-3 productCard" key={product.id} style={cardStyle} onClick={this.handleProductClick.bind(this, product.id)}>
          <div className="name bg-info p-3 text-light text-capitalize font-weight-bold">{product.name}</div>
          <div className="cost bg-dark p-2 text-light text-right">{formatCost(product.cost)}</div>
        </div>
      )
    });
    return(
      <div className="my-3">
        <h1 className="text-center">Playground Products</h1>
        <div className="mb-2">Select a product below for more details...</div>
        <div className="row products">
          {productCards}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {products} = state.products;
  return {
    products
  };
}

export default connect(mapStateToProps, {
  getProductList
})(ProductList);
