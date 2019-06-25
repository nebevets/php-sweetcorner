import types from '../actions/types';

const DEFAULT_STATE = {
  products: [],
  product: null,
};

export default (state = DEFAULT_STATE, action) => {
  const {type, products, product} = action;
  switch(type){
    case types.GET_PRODUCT_LIST:
      return {
        ...state,
        products
      };
    case types.GET_PRODUCT_DETAIL:
    return {
      ...state,
      product
    };
    default:
      return state;
  }
}