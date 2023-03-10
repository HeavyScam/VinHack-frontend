import './App.css';
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import StudentReg from './pages/Register/StudentReg';
import BlockForm from './pages/BlockChange/BlockForm';
import AllRooms from './pages/AvailableRooms/AllRooms';
import WardenHome from './pages/WardenHome/WardenHome';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<StudentReg />} />
        <Route path="/blockchange" element={<BlockForm />} />
        <Route path="/availablerooms" element={<AllRooms />} />
        <Route path="/wardenhome" element={<WardenHome />} />
      </Routes>
    </Router>
  );
}

export default App;
