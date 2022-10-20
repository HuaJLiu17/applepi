import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';

function App() {
  const loginClick = () => {};
  return (
    <>
      <Navbar loginClick={loginClick} />
      <Hero />
      <Companies />
    </>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
