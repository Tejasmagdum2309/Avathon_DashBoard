import React, { useEffect } from "react";
import FaultsTable from "./Components/FaultsTable";
import { tableDataFilterd } from "../../redux/selectors/tableSelectors";
import { setTableData } from "../../redux/slices/tableSlice";
import { useDispatch, useSelector } from "react-redux";

const DashBoardTable = () => {
  const dispatch = useDispatch();

  const tableData = useSelector(tableDataFilterd);
  // console.log('Table Data:', tableData);

  const tableDataFiltered = useSelector((state) => state.table.filterdTableData);


  useEffect(() => {
    dispatch(setTableData(tableData));
  }, [tableData, dispatch]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {/* Fault Details */}
      </h2>
      <FaultsTable data={tableDataFiltered} />
    </div>
  );
};

export default DashBoardTable;
