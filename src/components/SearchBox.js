import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2 tc'>
      <h2 className="searchbox-resp">With so many opportunities available... pilot training, drone training, airport technology... search our selection of courses and get started today!</h2>
      <input
        type='search'
        placeholder='search courses'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;