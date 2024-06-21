import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Header.css';

const Menu = ({ onNavigate }) => {
  return (
    <div className="menu position-absolute top-0 start-0 bg-white shadow-sm p-3">
      <button className="btn btn-light mb-3" onClick={() => onNavigate('/')}>X MENU</button>
      <nav className="menu-items">
        <a href="#decouvrir1" className="d-block mb-2" onClick={() => onNavigate('/discover')}>DECOUVRIR</a>
        <a href="#s-informer" className="d-block mb-2" onClick={() => onNavigate('/info')}>S'INFORMER</a>
        <a href="#contact" className="d-block" onClick={() => onNavigate('/contact')}>CONTACT</a>
      </nav>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAccountClick = () => {
    navigate('/login');
  };

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="header d-flex justify-content-between align-items-center p-3">
      <div className="header-left d-flex align-items-center">
        <button className="btn btn-light me-2"><i className="fas fa-accessible-icon"></i></button>
        <button className="menu-button btn btn-light" onClick={toggleMenu}>
          <span className="menu-icon">☰</span> MENU
        </button>
      </div>
      <div className="header-right d-flex align-items-center">
        <button className="btn btn-light me-2">🔍 RECHERCHE</button>
        <button className="btn btn-light" onClick={handleAccountClick}>👤 MON COMPTE</button>
      </div>
      {menuOpen && <Menu onNavigate={handleNavigation} />}
    </header>
  );
};

export default Header;
