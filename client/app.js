import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoutesPage from './Routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RoutesPage />
      </Router>
    </>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

export default App;
