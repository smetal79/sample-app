import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart, getCart, removeCartItem, submitOrder as submitOrderDb } from '../mock/db';

export const fetchCart = createAsyncThunk(
    "cart/get",
    () => Promise.resolve(getCart())
);

export const submitOrder = createAsyncThunk(
    "cart/submit",
    () => Promise.resolve(submitOrderDb())
);


const defaultCart = {
    total: 0,
    items: [],
    shipping: 0,
};

const initialState = {
    loading: 'idle',
    currentItems: [],
    cart: { ...defaultCart }
}

const { actions, reducer }  = createSlice({
    name: 'products',
    initialState,
    reducers: {
        itemAdded(state, action) {
            (state.currentItems as any).push(action.payload);
        },
        itemRemoved(state, action) {
            const i = state.currentItems.filter((j: any) => j.id !== action.payload);
            state.currentItems = i;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.cart = action.payload as any;
        });

        builder.addCase(submitOrder.fulfilled, (state, action) => {
            state.cart = { ...defaultCart };
            state.currentItems = [];
        });
    }
})

export const addItemToCart = createAsyncThunk(
    "cart/add",
    async (item, thunkApi) => {
        const result = await Promise.resolve(addToCart(item));
        thunkApi.dispatch(actions.itemAdded(item));
        return result;
    }
);

export const deleteCartItem = createAsyncThunk(
    "cart/delete",
    async (id, thunkApi) => {
        const result = await Promise.resolve(removeCartItem(id));
        thunkApi.dispatch(fetchCart());
        thunkApi.dispatch(actions.itemRemoved(id));

        return result;
    }
);

export default reducer