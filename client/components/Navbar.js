import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src="apple-pie-72-296830.png" alt="logo" />
        <a>ApplePi</a>
      </div>
      <div>
        <a>API Marketplace</a>
        <a>Blog</a>
        <a>Docs</a>
        <a>List Your API</a>
        <button className="login">Login</button>
      </div>
      
    </nav>
  );
}

export default Navbar;
