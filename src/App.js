import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Common from './pages/Common';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import StudentReg from './pages/Register/StudentReg';
import BlockForm from './pages/BlockChange/BlockForm';
import AllRooms from './pages/AvailableRooms/AllRooms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Common />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<StudentReg />} />
        <Route path="/blockchange" element={<BlockForm />} />
        <Route path="/availablerooms" element={<AllRooms />} />
      </Routes>
    </Router>
  );
}

export default App;
