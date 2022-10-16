import React from 'react';


const Header = () => {
    return (
      <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
        <div className="container flex-column justify-space-between-lg">
          {/* Use Link component to create a link that returns to the homepage on click */}
            <h1 className="m-0" style={{ fontSize: '3rem' }}>
              Portfolio
            </h1>
          <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
            Meet your new programming pals.
          </p>
        </div>
        <div className="container flex-column justify-space-between-lg">
            <p className="flex-column justify-space-between">
                about me
            </p>
            <p className="flex-column justify-space-between">
                Portfolio
            </p>
            <p className="flex-column justify-space-between">
                Contact
            </p>
            <p className="flex-column justify-space-between">
                Resume
            </p>
        </div>
      </header>
    );
  };
  
  export default Header;