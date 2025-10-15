import React from "react";
import { TableComponent } from "../../../Components/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  setColumnSorter,
  setPagination,
  setTableFilters,
} from "../../../redux/slices/tableSlice";
import { SearchDropdownComponent } from "../../../Components/SearchDropdownComponent";
import dayjs from "dayjs";

const FaultsTable = ({ data }) => {
  const dispatch = useDispatch();

  const { current, pageSize, total } = useSelector(
    (state) => state.table.pagination
  );
  const tableFilters = useSelector((state) => state.table.filters);
  const prevSorter = useSelector((state) => state.table.columnSorter);

  const columns = [
    {
      title: "Device Name",
      dataIndex: "device_name",
      key: "device_name",
      type: "string",
      sorter: true,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"device_name"}
        />
      ),
    },
    {
      title: "Device ID",
      dataIndex: "device_id",
      key: "device_id",
      type: "number",
      sorter: true,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"device_id"}
        />
      ),
    },
    {
      title: "Asset",
      dataIndex: "asset",
      key: "asset",
      type: "string",
      sorter: true,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"asset"}
        />
      ),
    },
    {
      title: "Asset Id",
      dataIndex: "asset_id",
      key: "asset_id",
      type: "number",
      sorter: true,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"asset_id"}
        />
      ),
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      type: "number",
      sorter: true,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"code"}
        />
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      type: "string",
      sorter: true,
      // For search, you can use built-in filterDropdown or a custom filter
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"category"}
        />
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      type: "string",
      sorter: true,
      // For search, you can use built-in filterDropdown or a custom filter
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"description"}
        />
      ),
    },
    {
      title: "Time Stamp",
      dataIndex: "time_stamp",
      key: "time_stamp",
      type: "string",
      sorter: true,
      render: (val) =>
        val ? dayjs(val).format("MMMM D, YYYY, h:mm:ss A") : "",
      // For search, you can use built-in filterDropdown or a custom filter
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"time_stamp"}
        />
      ),
    },
    {
      title: "Resolution Time",
      dataIndex: "resolution_time_stamp",
      key: "resolution_time_stamp",
      type: "string",
      sorter: true,
      render: (val) =>
        val ? dayjs(val).format("MMMM D, YYYY, h:mm:ss A") : "",

      // For search, you can use built-in filterDropdown or a custom filter
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"resolution_time_stamp"}
        />
      ),
    },
    {
      title: "Fault Type",
      dataIndex: "fault_type",
      key: "fault_type",
      type: "string",
      sorter: true,
      // For search, you can use built-in filterDropdown or a custom filter
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <SearchDropdownComponent
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          columnKey={"fault_type"}
        />
      ),
    },
  ];

  // console.log("Table Data in FaultsTable:", data);

  return (
    <TableComponent
      dataSource={data}
      columns={columns}
      pagination={{
        current: current,
        pageSize: pageSize,
        total: total,
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "20"],
      }}
      filters={tableFilters}
      onChange={(pagination, filters, sorter) => {
        // console.log("Pagination:", pagination);
        // console.log("Filters:", filters);
        // console.log("Sorter:", sorter);

        // console.log(
        //   "xxx :",
        //   pagination.current !== current || pagination.pageSize !== pageSize,
        //   " - ",
        //   JSON.stringify(filters) !== JSON.stringify(tableFilters),
        //   " - ",
        //   sorter.field !== prevSorter?.field ||
        //     sorter.order !== prevSorter?.order
        // );
        // Compare with previous state (from Redux)
        if (
          pagination.current !== current ||
          pagination.pageSize !== pageSize
        ) {
          dispatch(
            setPagination({
              current: pagination.current,
              pageSize: pagination.pageSize,
              total,
            })
          );
        } else if (JSON.stringify(filters) !== JSON.stringify(tableFilters)) {
          dispatch(setTableFilters(filters));
        } else if (
          sorter.field !== prevSorter?.field ||
          sorter.order !== prevSorter?.order
        ) {
          // console.log("Dispatching sorter change:", sorter);
          dispatch(
            setColumnSorter({
              column: sorter?.field,
              order: sorter?.order,
              type: sorter.column?.type,
            })
          );
        }
      }}
    />
  );
};

export default FaultsTable;
