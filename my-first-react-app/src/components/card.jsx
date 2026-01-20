import React from 'react';

const Card = ({ title, description, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <div className="service-card-content">
        <h4 className="service-card-title">{title}</h4>
        <p className="service-card-description">{description}</p>
      </div>
      <div className="service-card-hover"></div>
    </div>
  );
};

export default Card;