import React from 'react';
import '../Styles/MyProfile.css'
import { useSelector } from 'react-redux';
import { allMissions } from '../Redux/missionSlice';

const MyProfile = () => {
  const missions = useSelector(allMissions);
  const missionsArray = missions.filter((mission) => mission.joined);


  const { rocketList } = useSelector((state) => state.rockets);
  const reservedRockets = rocketList.filter((rocket) => rocket.reserved);

  const { dragons } = useSelector((store) => store.dragons);
	const ReservedDragons = dragons.filter((dragon) => dragon.reserved === true);
  console.log(ReservedDragons);
  return (
    <>
    <section className='profile_container'>
      <section className="myMissions">
        <h2 className="sectionTitle">My Missions</h2>
        {missionsArray.length > 0 ? (
          <ul className="myMissionsList">
            {missionsArray.map((mission) => {
              if (mission?.joined) {
                return (
                  <li className="item" key={mission.id}>
                    {mission.missionName}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        ) : (
          <div className='myMissionsList'>
            <p>No missions Joined</p>
          </div>
        )}
      </section>
      <section className='reserved_rockets'>
        <h2>My Rockets</h2>
        {reservedRockets.length ? (
          <ul className='rockets_container'>
          {reservedRockets.map((rocket) => (
            <li className="item" key={rocket.id}>
              {console.log(rocket)}
              <span>{rocket.rocket_name}</span>
            </li>
          ))}
        </ul>

        ) : (
          <div className='rockets_container'>
            <p>No rockets reserved</p>
          </div>
        )}
      </section>

    </section>
    </>
  );
};

export default MyProfile;

