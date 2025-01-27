import React from 'react';
import './styles/Card.css';

const Card = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-overlay">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
