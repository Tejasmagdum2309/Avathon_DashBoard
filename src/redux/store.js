import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './slices/dataSlice'
import pageLevelReducer from './slices/pageLevelSlice'
import graphReducer from './slices/graphSlice'
import tableReducer from './slices/tableSlice'


export const store = configureStore({
    reducer: {
        data: dataReducer,
        pageLevel: pageLevelReducer,
        graph: graphReducer,
        table: tableReducer
    }
})