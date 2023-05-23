import React from 'react';
import '../Styles/MyProfile.css'
import { useSelector } from 'react-redux';
import { allMissions } from '../Redux/missionSlice';

const MyProfile = () => {
  const missions = useSelector(allMissions);
  const missionsArray = missions.filter((mission) => mission.joined);

 
  return (
    <>
      <div className="ProfileContainer">
        <section className="myMissions">
          <span className="sectionTitle">My Missions</span>
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
            <span>No Missions Joined</span>
          )}
        </section>
      </div>
    </>
  );
};

export default MyProfile;
