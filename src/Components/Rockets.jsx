import React from 'react';
import '../Styles/Rockets.css';

function Rockets() {
  return (
    <>
      <div className="container">
        <img
          className="img"
          alt="Rocket"
        />
        <div className="rocket_info">
          <h2>rocket.rocket_name</h2>
          <p>
            (rocket.reserved or not)
            rocket.description
          </p>
          <button type="submit">
            Reserve Rocket
          </button>
        </div>
      </div>
    </>
  );
}

export default Rockets;
