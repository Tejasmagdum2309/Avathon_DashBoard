import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Space } from "antd";
import { setDevice, setFarm } from "../../redux/slices/pageLevelSlice";
import { filteredDevices } from "../../redux/selectors/pageSelector";

const DashBoardFilters = () => {
  const { Option } = Select;
  const dispatch = useDispatch();

  const { windFarms, devices } = useSelector((state) => state.data);
  const devicesFiltered = useSelector(filteredDevices);

  const { farm, device } = useSelector((state) => state.pageLevel.filters);

  // console.log("Devices Filtered:", devicesFiltered);

  // console.log("Wind Farms:", windFarms);
  // console.log("Devices:", devices);

  return (
    <Space size="large" className="mb-8">
      <Select
        placeholder="Wind Farm"
        style={{ width: 200 }}
        onChange={(val) => { dispatch(setFarm(val)); dispatch(setDevice(null)); }}
        allowClear
        value={farm}
      >
        {windFarms.map((farm) => (
          <Option key={farm.id} value={farm.id}>
            {farm.name}
          </Option>
        ))}
      </Select>


      <Select
        placeholder="Device"
        style={{ width: 200 }}
        onChange={(val) => dispatch(setDevice(val))}
        allowClear
        value={device}
      >
        {devicesFiltered.map((device) => (
          <Option key={device.id} value={device.id}>
            {device.name}
          </Option>
        ))}
      </Select>
    </Space>
  );
};

export default DashBoardFilters;
