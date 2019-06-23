import types from './types';
import axios from 'axios';

export const getProductList = () => async dispatch => {
  const response = await axios.get('/api/get-product-list.php');
  console.log('product list response', response);
  dispatch({
    type: types.GET_PRODUCT_LIST,
    products: response.data.products
  });
}