import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../Components/Header';

const SpaceRoutes = () => (
  <>
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Test</h1>} />
      </Routes>
    </div>
  </>
);

export default SpaceRoutes;
