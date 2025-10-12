import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstFilter,
  setGraphData,
  setOrder,
  setSecondFilter,
  setType,
} from "../../redux/slices/graphSlice";
import {
  GRAPH_FILTERS,
  graphFilterOptions,
} from "../../Constants/DashBoardConstants/GrapgConstants";
import { filterdGraphData } from "../../redux/selectors/graphSelectors";
import {
  BarChartIcon,
  PieChartIcon,
  SortAscendingIcon,
  SortDescendingIcon,
} from "../../Icons/Icons";
import BarChart from "../../Components/Graphs/BarChart";
import PieChart from "../../Components/Graphs/PieChart";

const ChartFilterBar = ({ dispatch, graphFilter, graphFilterOptions }) => (
  <div className="flex items-center mb-8 justify-end  sm:gap-x-4 md:gap-x-64">
    

    <div className="flex items-center gap-4 ">
    {/* Order Options - ASCENDING/DESCENDING */}
    <div className="flex items-center ml-4 gap-1">
      <span className="text-sm font-medium text-gray-700 mr-2">Order:</span>
      {graphFilter.order === GRAPH_FILTERS.ORDER.ASCENDING ? (
        <SortAscendingIcon
          size={20}
          color="#4A90E2"
          onClick={() => dispatch(setOrder(GRAPH_FILTERS.ORDER.DESCENDING))}
        />
      ) : (
        <SortDescendingIcon
          size={20}
          color="#4A90E2"
          onClick={() => dispatch(setOrder(GRAPH_FILTERS.ORDER.ASCENDING))}
        />
      )}
    </div>

    <div className="flex items-center ml-4 gap-1">
      <BarChartIcon
        size={20}
        color={
          graphFilter.type === GRAPH_FILTERS.CHART_TYPE.BAR
            ? "#4A90E2"
            : "#B0B0B0"
        }
        onClick={() => dispatch(setType(GRAPH_FILTERS.CHART_TYPE.BAR))}
      />
      <PieChartIcon
        size={20}
        color={
          graphFilter.type === GRAPH_FILTERS.CHART_TYPE.PIE
            ? "#4A90E2"
            : "#B0B0B0"
        }
        onClick={() => dispatch(setType(GRAPH_FILTERS.CHART_TYPE.PIE))}
      />
    </div>
    </div>

    {/* Second Filter Options */}
    <div className="flex">
      {graphFilterOptions.secondFilterOptions.map((option, index) => (
        <button
          key={option.value}
          onClick={() => dispatch(setSecondFilter(option.value))}
          className={`px-8 py-1 text-sm font-medium 
            ${index === 0 ? "rounded-l-md" : ""} 
            ${
              index === graphFilterOptions.secondFilterOptions.length - 1
                ? "rounded-r-md"
                : ""
            }
            ${
              graphFilter?.second_filter === option.value
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
            border border-gray-300 -ml-px first:ml-0 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:z-10`}
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
);

const DashboardGraph = () => {
  const dispatch = useDispatch();

  // Graph
  const graphFilter = useSelector((state) => state.graph.filters);
  const graphVisualizationData = useSelector(
    (state) => state.graph.graphVisualizationData
  );

  const graphData = useSelector(filterdGraphData);
  // console.log('Filtered Graph Data:', graphData);

  useEffect(() => {
    dispatch(setGraphData(graphData));
  }, [graphData, dispatch]);

  return (
    <>
      <div className="">
        {/* First Filter Options */}
        <div className="flex flex-wrap gap-y-2">
          {/* First Filter Options */}
          <div className="flex mr-4">
            {graphFilterOptions.firstFilterOptions.map((option, index) => (
              <button
                key={option.value}
                onClick={() => dispatch(setFirstFilter(option.value))}
                className={`px-8 py-1 text-sm font-medium 
            ${index === 0 ? "rounded-tl-md" : ""} 
            ${
              index === graphFilterOptions.firstFilterOptions.length - 1
                ? "rounded-tr-md"
                : ""
            }
            ${
              graphFilter?.first_filter === option.value
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
            border border-gray-300 -ml-px first:ml-0 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:z-10`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  gap-6 ">
        {graphFilter.type === GRAPH_FILTERS.CHART_TYPE.BAR ? (
          <BarChart
            data={graphVisualizationData}
            title=""
            dataKey="value"
            xAxisKey="name"
            axisLabels={{
              x: graphFilter.first_filter.slice(3),
              y: graphFilter.second_filter.slice(3),
            }}
            renderComponent={() => (
              <ChartFilterBar
                dispatch={dispatch}
                graphFilter={graphFilter}
                graphFilterOptions={graphFilterOptions}
              />
            )}
          />
        ) : (
          <PieChart
            data={graphVisualizationData}
            title=""
            dataKey="value"
            nameKey="name"
            
            renderComponent={() => (
              <ChartFilterBar
                dispatch={dispatch}
                graphFilter={graphFilter}
                graphFilterOptions={graphFilterOptions}
              />
            )}
          />
        )}
      </div>
    </>
  );
};

export default DashboardGraph;
