import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../features/customerSlice";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";

const store = configureStore({
    reducer: {
        customer: customerSlice
    }
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
