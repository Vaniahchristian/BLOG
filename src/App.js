import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './Pages/home';
import About from './Pages/About';
import Developers from './Pages/Developers';
import Navbar from './components/Navbar';


const App = () => {
 // console.log("App rendered");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </Router>
  );
};

export default App;
