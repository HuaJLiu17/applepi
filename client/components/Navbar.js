import React from 'react';

function Navbar(props) {
  return (
    <nav className="navbar">
      <div>
        <img src="apple-pie-72-296830.png" alt="logo" />
        <a>
          <strong>
            <h1>ApplePi</h1>
          </strong>
        </a>
      </div>
      <div className="rightNavDiv">
        <button className="rightNav">API Marketplace</button>
        <a className="rightNav">Blog</a>
        <a className="rightNav">Docs</a>
        <a className="rightNav">List Your API</a>
        <button className="login" onClick={props.loginClick}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
