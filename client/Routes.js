import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ApiMarketplace from './components/apiMarketplace';

function RoutesPage() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/marketplace" element={<ApiMarketplace />} />
    </Routes>
  );
}

export default RoutesPage;
