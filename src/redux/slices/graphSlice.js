import { createSlice } from "@reduxjs/toolkit";
import { GRAPH_FILTERS } from "../../Constants/DashBoardConstants/GrapgConstants";
import { processGraphData } from "../../helper/helper";

const initialState = {
    data : [],   //  {key: 'Stop', value: 39043.98333418411, frequency: 1119}
    graphVisualizationData : [], 
    filters : {
        first_filter : GRAPH_FILTERS.FIRST_FILTER.BY_ALARM_CODE , // By Alarm Code , By Category
        second_filter : GRAPH_FILTERS.SECOND_FILTER.BY_DURATION , // By Duration , By Frequency
        order : GRAPH_FILTERS.ORDER.DESCENDING , // Ascending , Descending
        type : GRAPH_FILTERS.CHART_TYPE.BAR , // Bar , Line , Pie
    }
    
}

const graphSlice = createSlice({
    name : 'graph',
    initialState,
    reducers : {
        setFirstFilter : (state , action) => {
            state.filters.first_filter = action.payload
        },
        setSecondFilter : (state , action) => {
            state.filters.second_filter = action.payload

            state.graphVisualizationData = processGraphData(state.data, state.filters);

        },
        setOrder : (state , action) => {
            state.filters.order = action.payload

            state.graphVisualizationData = processGraphData(state.data, state.filters);
        },
        setType : (state , action) => {
            state.filters.type = action.payload
        },
        setGraphData : (state , action) => {
            state.data = action.payload;

            state.graphVisualizationData = processGraphData(state.data, state.filters);


        }
    }
})       

export const { setFirstFilter , setSecondFilter , setOrder , setType , setGraphData } = graphSlice.actions
export default graphSlice.reducer


