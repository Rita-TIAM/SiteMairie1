import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import './styles/HotelsPage.css';

import hotelImage1 from '../assets/Images/img8.jpg';
import hotelImage2 from '../assets/Images/img2.jpg';
import hotelImage3 from '../assets/Images/img9.jpg';
// Importez d'autres images si nécessaire

const HotelsPage = () => {
  const hotels = [
    {
      image: hotelImage1,
      name: 'Nom Hotel 1',
      description: 'Description de l\'hotel 1',
    },
    {
      image: hotelImage2,
      name: 'Nom Hotel 2',
      description: 'Description de l\'hotel 2',
    },
    {
      image: hotelImage3,
      name: 'Nom Hotel 3',
      description: 'Description de l\'hotel 3',
    },
    // Ajoutez d'autres hôtels si nécessaire
  ];

  return (
    <div className="hotels-page">
      <Header />
      <header className="hotels-header">
        <h1>LES HOTELS DE LA REGION</h1>
      </header>
      <div className="hotels-content">
        {hotels.map((hotel, index) => (
          <Card 
            key={index}
            image={hotel.image}
            name={hotel.name}
            description={hotel.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HotelsPage;
