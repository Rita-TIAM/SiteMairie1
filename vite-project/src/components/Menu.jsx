import React from 'react';
import './styles/Menu.css';

const Menu = () => {
  return (
    <div className="menu position-absolute top-0 start-0 bg-white shadow-sm p-3">
      <button className="btn btn-light mb-3">X MENU</button>
      <nav className="menu-items">
        <a href="#decouvrir1" className="d-block mb-2">DECOUVRIR</a>
        <a href="#decouvrir2" className="d-block mb-2">DECOUVRIR</a>
        <a href="#s-informer" className="d-block mb-2">S'INFORMER</a>
        <a href="#contact" className="d-block">CONTACT</a>
      </nav>
    </div>
  );
};

export default Menu;
