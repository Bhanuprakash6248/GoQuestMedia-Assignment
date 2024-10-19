// src/components/Navigation.js
import React from 'react';

const Navigation = ({ onNext, onPrevious }) => (
  <div className="mt-4 flex justify-between">
    <button onClick={onPrevious} className="bg-gray-500 text-white py-2 px-4 rounded">
      Previous
    </button>
    <button onClick={onNext} className="bg-gray-500 text-white py-2 px-4 rounded">
      Next
    </button>
  </div>
);

export default Navigation;
