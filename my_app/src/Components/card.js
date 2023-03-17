// Card.js file
import React from 'react';
import './card.css';

const Card = ({ image, designation, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} width={150}/>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="card-subtitle">{designation}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
