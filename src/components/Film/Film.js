import React from 'react';
import './Film.css';

import Slika from '../Slika/Slika';

export default function Film({ name, year, genre, director, actors, image }) {
  return (
    <div className="Film card">
      <div className="card__side card__side--front">
        <Slika src={`./images/movies/${image}`} alt={`${name} image`} />
      </div>
      <div className="card__side card__side--back">
        <div className="text-container">
          <div className="text-field">
            <strong>Naziv:</strong>
            <span>{name}</span>
          </div>
          <div className="text-field">
            <strong>Godina izdavanja:</strong>
            <span>{year}</span>
          </div>
          <div className="text-field">
            <strong>Žanr:</strong>
            <span>{genre}</span>
          </div>
          <div className="text-field">
            <strong>Režiser:</strong>
            <span>{director}</span>
          </div>
          <div className="text-field">
            <strong>Glumci:</strong>
            <span>{actors}</span>
          </div>
        </div>
      </div>
      {/* <div className="image-container">
        <Slika src={`./images/movies/${image}`} alt={`${name} image`} />
      </div>
      <div className="text-container">
        <div className="text-field">
          <strong>Naziv:</strong>
          <span>{name}</span>
        </div>
        <div className="text-field">
          <strong>Godina izdavanja:</strong>
          <span>{year}</span>
        </div>
        <div className="text-field">
          <strong>Žanr:</strong>
          <span>{genre}</span>
        </div>
        <div className="text-field">
          <strong>Režiser:</strong>
          <span>{director}</span>
        </div>
        <div className="text-field">
          <strong>Glumci:</strong>
          <span>{actors}</span>
        </div>
      </div> */}
    </div>
  );
}
