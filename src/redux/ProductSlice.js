import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
});

export const fetchProductById = createAsyncThunk('product/fetchProductById', async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    selectedProduct: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      });
  }
});

export default productSlice.reducer;
