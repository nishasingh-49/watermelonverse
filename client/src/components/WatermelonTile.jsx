import React from 'react';

const WatermelonTile = ({ filled, label }) => {
  return (
    <div
      className={`relative w-24 h-14 rounded-full transition-transform duration-300 ease-in-out
        ${filled ? 'bg-gradient-to-b from-red-400 to-green-600 animate-soft-bounce shadow-lg' : 'bg-gray-300 dark:bg-gray-700'}
      `}
      style={{
        borderBottom: filled ? '6px solid #2f855a' : 'none',
      }}
    >
      {filled && (
        <>
          {/* Seeds */}
          <div className="absolute top-3 left-1/3 w-1 h-2 bg-black rounded-full"></div>
          <div className="absolute top-3 right-1/3 w-1 h-2 bg-black rounded-full"></div>
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-black rounded-full"></div>

          {/* Label on hover */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-90">
            {label}
          </div>
        </>
      )}
    </div>
  );
};

export default WatermelonTile;
