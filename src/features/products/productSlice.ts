import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/types";

interface IinitialState {
    products: IProduct[],
}

const initialState:IinitialState = {
    products: [],
}

const procustSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        red (state, action) {
            console.log(state);
            console.log(action.type);
        }
    }
})

export const { red } = procustSlice.actions;
export const productReducer = procustSlice.reducer;