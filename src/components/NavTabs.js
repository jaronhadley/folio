import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <div className="nav nav-tabs">
        <p className="nav-item">Jaron Hadley</p>
        <p className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </p>
        <p className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </p>
        <p className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </p>
        <p className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </p>
      </div>
    );
  }
  
  export default NavTabs;
  