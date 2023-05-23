import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../Components/Header';
import Missions from '../Components/Missions';
import MyProfile from '../Components/MyProfile';

const SpaceRoutes = () => (
  <div className="container-fluid">
    <Header />
    <Routes>
      <Route exact path="/missions" element={<Missions />} />
      <Route exact path="/myProfile" element={<MyProfile />} />
    </Routes>
  </div>
);

export default SpaceRoutes;
