import { configureStore } from '@reduxjs/toolkit';
import cartReducer,{ loadCartFromStorage } from './cartSlice';
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  
});
store.dispatch(loadCartFromStorage());

export default store;