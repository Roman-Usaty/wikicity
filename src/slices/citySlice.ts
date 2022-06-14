import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface CityState {
    value: string
}


const initialState: CityState = {
    value: "Самара"
}


export const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        setCity: (state: CityState, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        removeCity: (state: CityState) => {
            state.value = "";
        }
    }
});

export const {setCity, removeCity} = citySlice.actions;

export const selectCity = (state: RootState) => state.city.value;

export default citySlice.reducer;