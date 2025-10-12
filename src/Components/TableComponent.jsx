import React from "react";
import { Table } from "antd";

export const TableComponent = ({
  dataSource,
  columns,
  pagination,
  onChange,
}) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={pagination}
      onChange={onChange}
      rowKey={(record) => `${record.device_id}_${record.assiset_id}_${record.time_stamp}`} // Unique key for each row
      scroll={{ x: 'max-content' }}

    />
  );
};
