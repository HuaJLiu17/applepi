import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <div className="findyourapi">
        <div>
          <strong>ApplePi powers the API economy.</strong>
        </div>
        <div>&nbsp;</div>
        <Link className="rightNav nounderline" to="/marketplace">
          Find Your API
        </Link>
      </div>
      <img src="https://developer.spotify.com/assets/WebAPI_intro.png"></img>
    </div>
  );
}

export default Hero;
