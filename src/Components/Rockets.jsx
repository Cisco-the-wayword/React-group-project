import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNeededRockets } from '../Redux/rocketsSlice';
import '../Styles/Rockets.css'

function Rockets() {
  const { rocketList } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNeededRockets());
  }, [dispatch]);


  return (
    <>
      {rocketList.length > 0 ? (
        rocketList.map((rocket) => (
          <div key={rocket.id} className='container'>
            <img className='img'
              src={rocket.flickr_images[0]}
              alt="Rocket"
            />
            <div className='rocket_info'>
              <h2>{rocket.rocket_name}</h2>
              <p>
                {rocket.reserved && <span className='reserved_sign'>Reserved</span>}
                {rocket.description}
              </p>
              <button
                className='reserve'
              >
                Reserve Rocket
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Rockets;
