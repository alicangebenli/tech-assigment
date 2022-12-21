import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import dummyData from "./dummyData";
import CustomerModel from "../models/Customer";

const initialState: {
    Customers: CustomerModel[]
} = {
    Customers: [],
}
export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCustomerAsync.fulfilled, (state, action: PayloadAction<CustomerModel[]>) => {
            if (action.payload) {
                state.Customers = action.payload;
            }
        });
    }
});
export const getCustomerAsync = createAsyncThunk(
    'customer/getCustomerAsync',
    async (arg, {dispatch}) => {
        return dummyData;
    }
)
export default customerSlice.reducer;
