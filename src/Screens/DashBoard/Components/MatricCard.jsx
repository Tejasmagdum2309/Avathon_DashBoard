import React from 'react';


const variantColors = {
  yellow: {
    border: 'border-yellow-400',
    from: 'from-yellow-100',
    to: 'to-yellow-200',
    text: 'text-yellow-600',
  },
  blue: {
    border: 'border-blue-400',
    from: 'from-blue-100',
    to: 'to-blue-200',
    text: 'text-blue-600',
  },
  // Add more variants as needed
};
export const MetricCard = ({ title, value, subtitle, variant, icon }) => {
  const colors = variantColors[variant] || variantColors.blue; // Default to blue if variant not found

  return (
    <div className={`p-6 rounded-lg border shadow-lg ${colors.border} bg-gradient-to-r ${colors.from} ${colors.to} transition-transform transform hover:scale-105`}>
      <div className="flex items-start justify-between">
        {icon && (
          <div className={`mr-2 ${colors.text}`}>
            {icon}
          </div>
        )}
        <div className="flex-1 justify-end text-right">
          <p className="text-sm font-medium text-gray-700 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-700 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};