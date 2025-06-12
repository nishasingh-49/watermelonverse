import React from 'react';
import watermelonImg from '../assets/watermelon.png'; // We'll add this image next

const WatermelonAvatar = () => {
  return (
    <div className="w-24 h-24 animate-bounce">
      <img
        src={watermelonImg}
        alt="Watermelon Avatar"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default WatermelonAvatar;
