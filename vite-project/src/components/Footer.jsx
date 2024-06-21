import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light text-center py-4">
      <div className="row">
        <div className="col-md-6">
          <h4>LES MEMBRES</h4>
          <p>Réservez votre voyage avec :</p>
          {/* Placeholder for member reservation (could be an image carousel or similar) */}
          <div className="member-placeholder"></div>
        </div>
        <div className="col-md-6">
          <h4>SUIVEZ-NOUS</h4>
          <div className="social-links">
            <div className="social-link">
              <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
              <a href="#" className="social-text">Facebook</a>
            </div>
            <div className="social-link">
              <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
              <a href="#" className="social-text">Instagram</a>
            </div>
            <div className="social-link">
              <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
              <a href="#" className="social-text">Twitter</a>
            </div>
            <div className="social-link">
              <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
              <a href="#" className="social-text">LinkedIn</a>
            </div>
            <div className="social-link">
              <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
              <a href="#" className="social-text">YouTube</a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4">
        F.A.Q. | Crédits & Copyright | Mentions légales | Gestion des cookies | Politique de protection des données personnelles
      </p>
    </footer>
  );
};

export default Footer;
