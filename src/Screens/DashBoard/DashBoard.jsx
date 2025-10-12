import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux actions and selectors
import { initializeData } from "../../redux/slices/dataSlice";

// Selectors
import { selectFilteredFaults } from "../../redux/selectors/faultsSelectors";

//Components
import DashBoardTable from "./DashBoardTable";
import DashboardGraph from "./DashboardGraph";
import DashBoardCards from "./DashBoardCards";
import DashBoardFilters from "./DashBoardFilters";

const DashBoard = () => {
  const dispatch = useDispatch();

  // Call initialData when component mounts
  useEffect(() => {
    dispatch(initializeData());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Wind Turbine Fault Dashboard
        </h1>

        <DashBoardFilters />

        <DashBoardCards />

        <DashboardGraph />

        <DashBoardTable />
      </div>
    </div>
  );
};

export default DashBoard;
