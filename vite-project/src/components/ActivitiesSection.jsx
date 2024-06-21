import React from 'react';
import './styles/ActivitiesSection.css';
import activity1 from '../assets/Images/img6.jpg';
import activity2 from '../assets/Images/img5.jpg';
import activity3 from '../assets/Images/img7.jpg';
import activity4 from '../assets/Images/img8.jpg';

const ActivitiesSection = () => {
  return (
    <section className="activities-section text-center my-4">
      <h2>ACTIVITÉS DE LA MAIRIE</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="activity-card">
            <img src={activity1} alt="Activité 1" className="img-fluid" />
            <p>FAITES VOS CARTES NATIONALES D'IDENTITÉ</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="activity-card">
            <img src={activity2} alt="Activité 2" className="img-fluid" />
            <p>CONTACTEZ NOS PARTENAIRES</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="activity-card">
            <img src={activity3} alt="Activité 3" className="img-fluid" />
            <p>DOSSIERS THÉMATIQUES</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="activity-card pub">
            <img src={activity4} alt="Publicité" className="img-fluid" />
            <p>PUBLICITÉ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
