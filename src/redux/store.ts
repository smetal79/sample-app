import { configureStore } from '@reduxjs/toolkit';
import listProductSlice  from '../list-products/listProduct.slice';
import { reducer as cart } from '../cart';

export default configureStore({
  reducer: {
    productList: listProductSlice,
    cart
  }
})