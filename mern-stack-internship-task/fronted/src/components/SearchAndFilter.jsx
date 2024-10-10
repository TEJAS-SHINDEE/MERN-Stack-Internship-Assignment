import React from 'react';
import './SearchAndFilter.css'
const months = [
  'January', 'February', 'March', 'April', 'May', 
  'June', 'July', 'August', 'September', 'October', 
  'November', 'December'
];

const SearchAndFilter = ({ searchTerm, handleSearch, selectedMonth, handleMonthChange }) => {
  return (
    <div id='btn'>
      <input id='topbtn'
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <select id='topbtn' value={selectedMonth} onChange={(e) => handleMonthChange(e.target.value)}>
        {months.map(month => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;
