import { createSelector } from "@reduxjs/toolkit";
import { GRAPH_FILTERS } from "../../Constants/DashBoardConstants/GrapgConstants";
import { selectFilteredFaults } from "./faultsSelectors";

const filterdFaults = (state) => state.data.faults;

const first_filter = (state) => state.graph.filters.first_filter;


export const filterdGraphData = createSelector(
  [selectFilteredFaults, first_filter],
  (faults, first_filter) => {
      
    let graphData = [];

    // Use a Map to track unique values and their counts , etc...
    const dataMap = new Map();

    let key = '';
    if(first_filter === GRAPH_FILTERS.FIRST_FILTER.BY_ALARM_CODE){
        key = 'code';
    }
    else if(first_filter === GRAPH_FILTERS.FIRST_FILTER.BY_CATEGORY){
        key = 'category';
    }


    faults.forEach(fault => {
       const mapKey = fault[key];
       
        if (!dataMap.has(mapKey)) {
        // First time seeing this key
        dataMap.set(mapKey, { 
          key: mapKey,
          value: fault.duration_seconds, 
          frequency: 1 
        });
      } else {
        // Already seen this key, update values
        const existing = dataMap.get(mapKey);
        existing.value += fault.duration_seconds;
        existing.frequency += 1;
        dataMap.set(mapKey, existing);
      }
       
    });

    // Convert Map values to an array
    graphData = Array.from(dataMap.values());


    return graphData;
  }
  
);