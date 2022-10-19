import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
