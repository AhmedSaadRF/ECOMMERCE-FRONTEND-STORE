import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;

      const existingItem = state.cart.find((item) => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ product, quantity });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.product.id !== action.payload);
    },

    updateCartQuantity: (state, action) => {
      const item = state.cart.find((item) => item.product.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
