import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    //console.log("Navbar rendered");
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/developers">Developers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
