import { createSelector } from "@reduxjs/toolkit";

const selectFaults = state => state.data.faults;
const selectPageFilters = state => state.pageLevel.filters;

export const selectFilteredFaults = createSelector(
  [selectFaults, selectPageFilters],
  (faults, filters) => {
    return faults.filter(fault => {
      // Loop through each filter key and check if it matches
      for (const key in filters) {
        if(key === 'farm'){
            if(filters[key] && fault["asset_id"] !== filters[key]) return false;
        }
        else if(key === 'device'){
            if(filters[key] && fault["device_id"] !== filters[key]) return false;
        }
      }
      return true;
    });
  }
);
