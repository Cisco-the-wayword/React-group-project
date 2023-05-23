import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../Components/Header';
import MyProfile from '../Components/MyProfile';

const SpaceRoutes = () => (
  <>
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Rockets</h1>} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/missions" element={<h1>Missions</h1>} />
        <Route path="/dragons" element={<h1>Dragons</h1>} />
      </Routes>
    </div>
  </>
);

export default SpaceRoutes;
