import React, { useEffect, useState } from 'react';
import './styles/AboutSection.css';
import aboutImage from '../assets/Images/img3.jpg'; // Assurez-vous que l'image existe à cet emplacement

const AboutSection = () => {
  const [data, setData] = useState({
    creationDate: 0,
    inhabitants: 0,
    area: 0,
    departments: 0
  });

  useEffect(() => {
    // Fonction pour animer les chiffres
    const animateValues = (start, end, duration) => {
      let startTime = null;

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setData({
          creationDate: Math.floor(start.creationDate + (end.creationDate - start.creationDate) * progress),
          inhabitants: Math.floor(start.inhabitants + (end.inhabitants - start.inhabitants) * progress),
          area: Math.floor(start.area + (end.area - start.area) * progress),
          departments: Math.floor(start.departments + (end.departments - start.departments) * progress)
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    animateValues(
      { creationDate: 0, inhabitants: 0, area: 0, departments: 0 },
      { creationDate: 500, inhabitants: 500000, area: 500, departments: 500 },
      2000
    );
  }, []);

  return (
    <section className="about-section text-center my-4">
      <h2 className="about-title">À PROPOS DE NOUS</h2>
      <div className="about-image-container">
        <img src={aboutImage} alt="À propos de nous" className="img-fluid about-image" />
        <div className="overlay">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="icons">
            <div className="icon">
              <span className="icon-value">{data.creationDate}</span>
              <span className="icon-label">+ Création</span>
            </div>
            <div className="icon">
              <span className="icon-value">{data.inhabitants}</span>
              <span className="icon-label">+ Habitants</span>
            </div>
            <div className="icon">
              <span className="icon-value">{data.area}</span>
              <span className="icon-label">+ Superficie</span>
            </div>
            <div className="icon">
              <span className="icon-value">{data.departments}</span>
              <span className="icon-label">+ Départements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
