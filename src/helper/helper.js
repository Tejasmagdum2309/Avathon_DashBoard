import { GRAPH_FILTERS } from "../Constants/DashBoardConstants/GrapgConstants";

/**
 * Process graph data based on filters
 */
export const processGraphData = (data, filters) => {
  if (!data || !data.length) return [];
  
  // Create a copy to avoid mutating the original
  let visData = [...data];
  
  // Apply sorting based on second filter
  if (filters.second_filter === GRAPH_FILTERS.SECOND_FILTER.BY_DURATION) {
    visData = visData
      .sort((a, b) => filters.order === GRAPH_FILTERS.ORDER.ASCENDING 
        ? a.value - b.value 
        : b.value - a.value)
      .map((f) => ({ 
        name: f.key, 
        value: f.value 
      }));
  } 
  else if (filters.second_filter === GRAPH_FILTERS.SECOND_FILTER.BY_FREQUENCY) {
    visData = visData
      .sort((a, b) => filters.order === GRAPH_FILTERS.ORDER.ASCENDING 
        ? a.frequency - b.frequency 
        : b.frequency - a.frequency)
      .map((f) => ({ 
        name: f.key, 
        value: f.frequency 
      }));
  }
  
  // Return top 10
  return visData.slice(0, 10);
};

export function formatMinutes(minutes) {
   if (typeof minutes !== 'number' || isNaN(minutes)) {
    return '0 sec'; // or any default message you prefer
  }
  const h = Math.floor(minutes / 60);
  const m = Math.floor(minutes % 60);
  const s = Math.round((minutes % 1) * 60);
  if(h === 0 && m === 0) return `${s} sec`;
  if(h === 0) return `${m} min, ${s} sec`;
  return `${h} h, ${m} min, ${s} sec`;
}


export function formatSeconds(seconds) {
   if (typeof minutes !== 'number' || isNaN(minutes)) {
    return '0 sec'; // or any default message you prefer
  }
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if(h === 0 && m === 0) return `${s} sec`;
  if(h === 0) return `${m} min, ${s} sec`;
  return `${h} h, ${m} min, ${s} sec`;
}

// Example:
formatSeconds(1196); // "0 hours, 19 minutes, 56 seconds"