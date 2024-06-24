import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.productId !== action.payload.productId);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cartItems');
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(item => item.productId === productId);
      if (existingItem) {
        existingItem.quantity = quantity;
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
    loadCartFromStorage: (state) => {
      const storedCart = JSON.parse(localStorage.getItem('cartItems'));
      if (storedCart) {
        state.items = storedCart;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, updateQuantity, loadCartFromStorage } = cartSlice.actions;

export default cartSlice.reducer;
