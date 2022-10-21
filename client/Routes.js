import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ApiMarketplace from './components/apiMarketplace';
import Register from './components/Register';

function RoutesPage() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/marketplace" element={<ApiMarketplace />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
}

export default RoutesPage;
