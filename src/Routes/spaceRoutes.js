import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../Components/Header';
import Rockets from '../Components/Rockets';

const SpaceRoutes = () => (
  <>
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </div>
  </>
);

export default SpaceRoutes;
