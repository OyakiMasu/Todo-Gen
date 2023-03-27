import React from 'react';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import { Routes, Route } from "react-router-dom"
import Signin from './components/Signin';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/sign-up" element={ <Signup/> } />
      <Route path="/sign-in" element={ <Signin/> } />
      </Routes>


    </div>
  );
}

export default App;
