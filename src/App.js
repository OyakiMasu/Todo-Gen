import React from 'react';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/sign-up" element={ <Signup/> } />
      </Routes>

    </div>
  );
}

export default App;
