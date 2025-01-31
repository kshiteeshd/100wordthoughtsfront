import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

import './App.scss';  // Make sure this file is linked, or include the CSS directly here.

const Navbar = () => {
  const location = useLocation(); // Get the current location (URL)

  // Function to check if the link is active
  const getLinkClass = (path) => {
    return location.pathname === path ? 'nav_link active' : 'nav_link';
  };

  return (
    <div>
      <header className='header'>
        <h1 className='anim'>100 Word Thoughts!</h1>
      </header>

      <nav className="nav">
        <ul className="nav_content">
          <li className="nav_item">
            <a href="/" className={getLinkClass('/')}>Home</a>
          </li>
          <li className="nav_item">
            <a href="/articles" className={getLinkClass('/articles')}>Articles</a>
          </li>
          <li className="nav_item">
            <a href="/create" className={getLinkClass('/create')}>Create Article</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
