import React from 'react';
import WatermelonTile from './WatermelonTile';

const GardenGrid = ({ plants, totalTiles }) => {
  const gridSize = Math.ceil(Math.sqrt(totalTiles));
  const grid = Array.from({ length: totalTiles });

  return (
    <div className="flex justify-center mt-10">
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(60px, 1fr))`,
        }}
      >
        {grid.map((_, i) => {
          const task = plants.find((t) => t.tile === i);
          return (
            <WatermelonTile key={i} filled={!!task} label={task?.task} />
          );
        })}
      </div>
    </div>
  );
};

export default GardenGrid;