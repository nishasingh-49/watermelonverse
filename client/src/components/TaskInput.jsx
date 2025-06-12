import React from 'react';

const TaskInput = ({ value, onChange, onComplete }) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a task..."
        className="p-2 rounded border border-gray-300"
      />
      <button
        onClick={onComplete}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
      >
        ✅ Done
      </button>
    </div>
  );
};

export default TaskInput;
