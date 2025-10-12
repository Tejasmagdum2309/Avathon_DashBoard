import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Space } from "antd";
import { setDevice, setFarm } from "../../redux/slices/pageLevelSlice";

const DashBoardFilters = () => {
  const { Option } = Select;
  const dispatch = useDispatch();

  const { windFarms, devices } = useSelector((state) => state.data);

  console.log("Wind Farms:", windFarms);
  console.log("Devices:", devices);

  return (
    <Space size="large" className="mb-8">
      <Select
        placeholder="Wind Farm"
        style={{ width: 200 }}
        onChange={(val) => dispatch(setFarm(val))}
        allowClear
      >
        {windFarms.map((farm) => (
          <Option key={farm.id} value={farm.id}>
            {farm.name}
          </Option>
        ))}
      </Select>


      <Select
        placeholder="Wind Farm"
        style={{ width: 200 }}
        onChange={(val) => dispatch(setDevice(val))}
        allowClear
      >
        {devices.map((device) => (
          <Option key={device.id} value={device.id}>
            {device.name}
          </Option>
        ))}
      </Select>
    </Space>
  );
};

export default DashBoardFilters;
