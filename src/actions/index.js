import types from './types';
import axios from 'axios';

export const getProductList = () => async dispatch => {
  const response = await axios.get('/api/get-product-list.php');
  dispatch({
    type: types.GET_PRODUCT_LIST,
    products: response.data.products
  });
}
export const getProductDetail = (id) => async dispatch => {
  const response = await axios.get(`/api/get-product-detail.php?id=${id}`);
  dispatch({
    type: types.GET_PRODUCT_DETAIL,
    product: response.data.product
  });
}