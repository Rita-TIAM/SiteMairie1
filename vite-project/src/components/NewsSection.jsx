import React from 'react';
import './styles/NewsSection.css';

const NewsSection = ({ news }) => {
  return (
    <section className="news-section text-center my-4">
      <h2>ACTUALITÉS DE LA MAIRIE</h2>
      <div className="row">
        {news.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="news-card">
              <img src={item.image} alt={item.title} className="img-fluid" />
              <div className="news-overlay">
                <p className="news-category">{item.category}</p>
                <p className="news-title">{item.title}</p>
                <p className="news-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
