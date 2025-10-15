import { createSelector } from "@reduxjs/toolkit";

const devices = (state) => state.data.devices;
const turbines = (state) => state.data.turbines;


const selectedFarmId = (state) => state.pageLevel.filters.farm;

export const filteredDevices = createSelector(
  [ devices, turbines , selectedFarmId],
  ( devices, turbines, selectedFarmId) => {
    //    console.log("Selected Farm ID in Selector:", selectedFarmId);
       if(!selectedFarmId) return devices;

       let devicesFiltered = turbines.filter(turbine => turbine.asset_id === selectedFarmId);

    //    console.log("Devices Filtered in Selector:", devicesFiltered);
       return devicesFiltered.map(turbine => {
          return {
            id : turbine.id,
            name : turbine.device_name
          }
       });
  }
);