import { createSelector } from "@reduxjs/toolkit";

const combinedData = state => state.data.combinedData;
const selectPageFilters = state => state.pageLevel.filters;


export const tableDataFilterd = createSelector(
    [combinedData , selectPageFilters],
    (data , filters) => {
        return data.filter(data => {
      // Loop through each filter key and check if it matches
      for (const key in filters) {
        if(key === 'farm'){
            if(filters[key] && data["asset_id"] !== filters[key]) return false;
        }
        else if(key === 'device'){
            if(filters[key] && data["device_id"] !== filters[key]) return false;
        }
      }
      return true;
    });
    }
);

