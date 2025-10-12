import { createSelector } from "@reduxjs/toolkit";

import { selectFilteredFaults } from './faultsSelectors'

import {formatMinutes , formatSeconds} from '../../helper/helper';
const uniqueDevices = state => state.data.devices;


export const filterdCardData = createSelector(
    [selectFilteredFaults , uniqueDevices],
    (faults, uniqueDevices) => {
        let totalSeconds = 0;
        let maxDutaionFaultDevice = '';
        let maxDutaionFaultDeviceTime = 0;

        faults.forEach(f => {
            totalSeconds += f.duration_seconds;
            if(maxDutaionFaultDeviceTime < f.duration_seconds){
                maxDutaionFaultDeviceTime = f.duration_seconds;
                maxDutaionFaultDevice = f.device_id;
            }

        });     
        
        let device = uniqueDevices.find(d => d.id === maxDutaionFaultDevice);

        let returnData = [{ title : 'Total Faults', value: faults.length  } , { title : 'Total Faults Duration', value:   formatSeconds(totalSeconds)  }, { title : 'Average Fault Duration ', value: formatSeconds((totalSeconds / faults.length))  } , { title : "Device With Max Duration Alarm" , value : device?.name }];

        return returnData;

    } // have to return array of { title: '', value: '' }
)