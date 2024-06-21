import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/DiscoverPage.css';
import hotelImage from '../assets/Images/img6.jpg';
import restaurantImage from '../assets/Images/img5.jpg';
import touristSiteImage from '../assets/Images/img7.jpg';
import { useNavigate } from 'react-router-dom';

const DiscoverPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="discover-page">
      <Header />
      <header className="discover-header">
        <h1>DECOUVREZ TOUS NOS SERVICES</h1>
      </header>
      <div className="discover-content">
        <div className="discover-card" onClick={() => handleNavigation('/hotels')}>
          <img src={hotelImage} alt="Nos Hotels" />
          <h3>NOS HOTELS</h3>
        </div>
        <div className="discover-card" onClick={() => handleNavigation('/restaurants')}>
          <img src={restaurantImage} alt="Nos Restaurants" />
          <h3>NOS RESTAURANTS</h3>
        </div>
        <div className="discover-card" onClick={() => handleNavigation('/tourist-sites')}>
          <img src={touristSiteImage} alt="Nos Sites Touristiques" />
          <h3>NOS SITES TOURISTIQUES</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiscoverPage;
