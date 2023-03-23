import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/pages/Shop';
import HungerMap from './components/pages/HungerMap';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/HungerMap' element={<HungerMap />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
  