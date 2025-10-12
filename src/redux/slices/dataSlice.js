import { createSlice } from "@reduxjs/toolkit";
import devices from "../../DummyData/device.json";
import faults from "../../DummyData/fault.json";

const initialState = {
  turbines: devices,
  faults,
  combinedData : [], // { turbineId, faultId, timestamp , ....... }
  windFarms: [], // { id , name},
  devices: [], // { id, name}   // (clearify...)
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    initializeData: (state) => {
      let groupedTurbines = [];
      let groupedFarms = [];

      // Use Sets to track seen IDs and avoid duplicates
      const seenFarmIds = new Set();

      // t = single turbine / device
      state.turbines.forEach((t) => {
        // Group of farms
        if (!seenFarmIds.has(t.asset_id)) {
          groupedFarms.push({ id: t.asset_id, name: t.asset });
          seenFarmIds.add(t.asset_id);
        }

        // all turbines
        groupedTurbines.push({ id: t.id, name: t.device_name });
      
      });

        state.windFarms = groupedFarms;
        state.devices = groupedTurbines;


        // Combine turbines and faults based on asset_id and device_id
        let combinedData = [];

        state.faults.forEach((fault) => {
          let matchingTurbine = state.turbines.find((t) => t.id === fault.device_id && t.asset_id === fault.asset_id);

          if (matchingTurbine) {
            combinedData.push({
              device_name : matchingTurbine.device_name,
              asset : matchingTurbine.asset,
              ...fault,
            });
          }
        });

        state.combinedData = combinedData;

    },
  },
});

export const { initializeData } = dataSlice.actions;
export default dataSlice.reducer;
