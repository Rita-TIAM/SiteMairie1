import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import DiscoverPage from './components/DiscoverPage';
import HotelsPage from './components/HotelsPage';
import Footer from './components/Footer'; // Assurez-vous que le composant Footer est importé correctement
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          {/* Ajoutez des routes pour Restaurants et Sites Touristiques */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
