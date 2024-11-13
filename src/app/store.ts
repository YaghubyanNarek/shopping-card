import { configureStore } from "@reduxjs/toolkit";
import productApi from "../features/products/product.api";
import { basketReducer } from "../features/basket/basketSlice";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        items: basketReducer,
    },
    middleware: (getDefaultMiddlaware) => getDefaultMiddlaware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;    