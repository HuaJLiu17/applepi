import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar">
      <div>
        <img src="apple-pie-72-296830.png" alt="logo" />
        <Link className="nounderline" to="/">
          <h1>
            <strong>ApplePi</strong>
          </h1>
        </Link>
      </div>
      <div className="rightNavDiv">
        <Link className="rightNav nounderline" to="/marketplace">
          API Marketplace
        </Link>
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
