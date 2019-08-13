import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="flightApp">
      <div className="flightApp-header">
        <i className="fas fa-plane flightApp-logo"></i>
        <h1>React Flight Training</h1>
      </div>
    </div>
  );
}

export default Header;
