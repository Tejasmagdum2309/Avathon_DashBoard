import { createSlice } from "@reduxjs/toolkit";
import { Pagination } from "antd";

const initialState = {
  tableData: [], // Table data of combination of faults and devices data ( filterd data according to page filters)
  
  filterdTableData: [], // Table data after applying search and sorting on tableData

  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
  },
  filters: {//asset: ['as2'], category: ['as3'],device_name: ['as'], resolution_time_stamp: [''],time_stamp: null, ... },
  
  },  
  currentSelectedFilter : null,
  columnSorter: {
    // {field: "device_name", order: "ascend"}
    column: null,
    order: null, // 'ascend' or 'descend'
    type : null, // 'number' or 'string'
  },
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setCurrentSelectedFilter: (state, action) => {
      console.log("Setting current selected filter to:", action.payload);
      state.currentSelectedFilter = action.payload;
    },
    setTableData: (state, action) => {
      state.tableData = action.payload;
      state.filterdTableData = action.payload.slice(0, 10); // Initialize filtered data with first 10 items
      state.pagination.current = 1;
      state.pagination.pageSize = 10;
      state.pagination.total = action.payload.length;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
      state.filterdTableData = state.tableData.slice(
        (action.payload.current - 1) * action.payload.pageSize,
        action.payload.current * action.payload.pageSize
      );
    },
    setTableFilters: (state, action) => {
      state.filters = action.payload;

      let data = [...state.tableData];

      console.log('qqqq : ' , state.currentSelectedFilter);
      if(!state.currentSelectedFilter) return;  //  initial stage this will cause isssue ... so return..

      // initile select filter as we will go with this flow..
      data = data.filter((d) => {
          return d[state.currentSelectedFilter].toString().toLowerCase().includes((state.filters[state.currentSelectedFilter] || []).toString().toLowerCase());
      })

      //key !== state.currentSelectedFilter  will not filter with this as we filterd first with this filter above..
      Object.keys(state.filters).forEach((key) => {
        
        if (key !== state.currentSelectedFilter && !!state.filters[key] && state.filters[key].length > 0) {
            data = data.filter((d) => {
                return d[key].toString().toLowerCase().includes(state.filters[key].toString().toLowerCase());
            });
        }
      });
      
      state.filterdTableData = data.slice(0, state.pagination.pageSize);
      state.pagination.current = 1;
      state.pagination.total = data.length;

    },
    setColumnSorter: (state, action) => {
      state.columnSorter = action.payload;
      
      let sortedData = [...state.tableData];
      const { column, order, type } = action.payload;

      // will mostly not run just in case...
      if (!column || !order) {
        state.filterdTableData = state.tableData.slice(0, state.pagination.pageSize);
        return;
      }

      sortedData.sort((a, b) => {
        if (type === "number") {
          return order === "ascend" ? a[column] - b[column] : b[column] - a[column];
        } else if (type === "string") {
          return order === "ascend"
            ? a[column].localeCompare(b[column])
            : b[column].localeCompare(a[column]);
        }
      });

      state.filterdTableData = sortedData.slice(
        (state.pagination.current - 1) * state.pagination.pageSize,
        state.pagination.current * state.pagination.pageSize
      );

    },
  },
});

export const { setCurrentSelectedFilter ,setTableData, setPagination, setTableFilters, setColumnSorter } =
  tableSlice.actions;
export default tableSlice.reducer;
