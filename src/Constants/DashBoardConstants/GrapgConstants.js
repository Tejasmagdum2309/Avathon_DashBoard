export const GRAPH_FILTERS = {
  FIRST_FILTER: {
    BY_ALARM_CODE: 'BY_ALARM_CODE',
    BY_CATEGORY: 'BY_CATEGORY'
  },
  SECOND_FILTER: {
    BY_DURATION: 'BY_DURATION',
    BY_FREQUENCY: 'BY_FREQUENCY'
  },
  ORDER: {
    ASCENDING: 'ASCENDING',
    DESCENDING: 'DESCENDING'
  },
  CHART_TYPE: {
    BAR: 'BAR',
    LINE: 'LINE',
    PIE: 'PIE'
  }
};

// Options formatted for Select components
export const graphFilterOptions = {
  firstFilterOptions: [
    { value: GRAPH_FILTERS.FIRST_FILTER.BY_ALARM_CODE, label: 'By Alarm Code' },
    { value: GRAPH_FILTERS.FIRST_FILTER.BY_CATEGORY, label: 'By Category' }
  ],
  secondFilterOptions: [
    { value: GRAPH_FILTERS.SECOND_FILTER.BY_DURATION, label: 'By Duration' },
    { value: GRAPH_FILTERS.SECOND_FILTER.BY_FREQUENCY, label: 'By Frequency' }
  ],
  orderOptions: [
    { value: GRAPH_FILTERS.ORDER.ASCENDING, label: 'Ascending' },
    { value: GRAPH_FILTERS.ORDER.DESCENDING, label: 'Descending' }
  ],
  chartTypeOptions: [
    { value: GRAPH_FILTERS.CHART_TYPE.BAR, label: 'Bar Chart' },
    { value: GRAPH_FILTERS.CHART_TYPE.LINE, label: 'Line Chart' },
    { value: GRAPH_FILTERS.CHART_TYPE.PIE, label: 'Pie Chart' }
  ]
};