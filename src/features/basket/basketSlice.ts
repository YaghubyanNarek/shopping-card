import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/types";

interface IInitialState {
  items: { product: IProduct; quantity: number }[];
}

const initialState: IInitialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<IProduct>) {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromBasket(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter((item) => item.product.id !== action.payload.id);
    },
    incrementQuantity(state, action: PayloadAction<{ id: string }>) {
      const item = state.items.find((item) => item.product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, action: PayloadAction<{ id: string }>) {
      const item = state.items.find((item) => item.product.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  incrementQuantity,
  decrementQuantity,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
