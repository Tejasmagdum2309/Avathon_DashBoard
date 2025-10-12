import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters : {
        farm : null,   // will store id 
        device : null, // will store id
    }   
}

const pageLevelSlice = createSlice({
    name: 'pageLevel',
    initialState,
    reducers: {
        setFarm : (state, action) => {
            state.filters.farm = action.payload;
        },
        setDevice : (state, action) => {
            state.filters.device = action.payload;
        }
    }
})

export const { setFarm , setDevice } = pageLevelSlice.actions;

export default pageLevelSlice.reducer;