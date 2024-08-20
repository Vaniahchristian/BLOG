import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './Pages/home';
import About from './Pages/About';
import Developers from './Pages/Developers';
import Navbar from './components/Navbar';
import DeveloperPage from './components/DeveloperPage';

const App = () => {
  const developers = [
    { name: 'ACAN BRENDA', regNo: '21/U/05295/EVE', phone: '0764801783' },
    { name: 'Aheebwomugisha Sasha Ana', regNo: '21/U/12223/PS', phone: '0702932328' },
    { name: 'Nalugya Merisa', regNo: '21/U/17292/PS', phone: '0703844581' },
    { name: 'MUKISA VANIAH CHRISTIAN', regNo: '21/U/13176/EVE', phone: '0754092850' },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/:name" element={<DeveloperPage developers={developers} />} />
      </Routes>
    </Router>
  );
};

export default App;
