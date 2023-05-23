import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../Components/Header';
import MyProfile from '../Components/MyProfile';
import Missions from '../Components/Missions'

const SpaceRoutes = () => (
  <>
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Rockets</h1>} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route exact path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<h1>Dragons</h1>} />
      </Routes>
    </div>
  </>
);

export default SpaceRoutes;