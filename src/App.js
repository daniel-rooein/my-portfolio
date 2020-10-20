import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/homepage-component';


function App() {
  return (
    <div>
      <Navbar />
      <HomePage/>
    </div>
  );
}

export default App;
