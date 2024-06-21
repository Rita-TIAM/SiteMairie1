import React, { useState, useEffect } from 'react';
import Header from './Header';
import AnimatedText from './AnimatedText';
import ActivitiesSection from './ActivitiesSection';
import NewsSection from './NewsSection';
import AboutSection from './AboutSection';
import { initializeNewsUpdates } from './utils/homePageUtils';

import bannerImage from '../assets/Images/img2.jpg';
import newsImage1 from '../assets/Images/img6.jpg';
import newsImage2 from '../assets/Images/img10.jpg';
import newsImage3 from '../assets/Images/img6.jpg';
import newsImage4 from '../assets/Images/img8.jpg';
import newsImage5 from '../assets/Images/img7.jpg';

import './styles/HomePage.css';

const HomePage = () => {
  const [news, setNews] = useState([
    {
      category: 'INTERVIEW',
      title: 'QUENTIN DEL BERGIOLO - Toundra Voyages',
      description: '',
      image: newsImage1
    },
    {
      category: 'DIVERTISSEMENT',
      title: 'LES SPECTACLES DU CIRQUE DU SOLEIL',
      description: 'Depuis 1984, le Cirque du Soleil a assis sa place de leader à Las Vegas...',
      image: newsImage2
    },
    {
      category: 'SITE NATUREL',
      title: 'LES 58 FORÊTS D\'ÉTAT DU MINNESOTA',
      description: '',
      image: newsImage3
    },
    {
      category: 'SITE NATUREL',
      title: 'GARDEN OF THE GODS',
      description: 'Les passionnés de géologie seront séduits par les incroyables formations...',
      image: newsImage4
    },
    {
      category: 'ACTIVITÉS',
      title: 'LES MEILLEURES ACTIVITÉS',
      description: '',
      image: newsImage5
    }
  ]);

  useEffect(() => {
    // Initialiser les mises à jour périodiques des actualités
    const cleanup = initializeNewsUpdates(setNews);
    return cleanup; // Fonction de nettoyage pour arrêter les mises à jour périodiques
  }, []);

  return (
    <div className="home-page">
      <Header />
      <section className="welcome-section text-center my-4">
        <img src={bannerImage} alt="Bienvenue" className="img-fluid" />
        <AnimatedText text="BIENVENUE SUR LE SITE OFFICIEL DE LA MAIRIE DE L'AOULOUKOUDJE" speed={100} />
      </section>
      <ActivitiesSection />
      <NewsSection news={news} />
      <AboutSection />
    </div>
  );
};

export default HomePage;
