import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarChart = ({ data, title, dataKey, xAxisKey = "name", height = 360 , axisLabels , renderComponent }) => {
  return (
    <div className="bg-white px-6 py-2  rounded-tr-lg rounded-br-lg rounded-bl-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      {renderComponent && renderComponent()}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey={xAxisKey} 
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
            label={{ value: axisLabels?.x, position: 'insideBottom', offset: -15 , style: { fontWeight: 'bold', fill: '#2563eb', fontSize: 16 , zIndex : 100 } }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
            label={{ value: axisLabels?.y, angle: -90, position: 'insideLeft', offset: -10 ,     style: { fontWeight: 'bold', fill: '#2563eb', fontSize: 16 , zIndex : 100 } }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e5e7eb',
              borderRadius: '6px'
            }}
          />
          <Bar 
            dataKey={dataKey} 
            fill="#2563eb" 
            radius={[4, 4, 0, 0]}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;