import React from 'react';

const SearchBar = ({ onSearch }) => (
  <div className="mb-6">
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default SearchBar;
