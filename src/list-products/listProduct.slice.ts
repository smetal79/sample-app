
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { allProducts, Product } from '../mock/db';

export const fetchProducts = createAsyncThunk(
    "product/fetchall",
    () => Promise.resolve(allProducts())
  );

type InitialState = {
    products: Array<Product>,
    loading: string
}

const initialState: InitialState = {
    products: [],
    loading: 'idle'
  }

export const productListSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload ;
        })
    }
  })

  
export default productListSlice.reducer
