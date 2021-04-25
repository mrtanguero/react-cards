import React from 'react';
import './Knjiga.css';
import Slika from '../Slika/Slika';

export default function Knjiga({ name, year, author, quote, image }) {
  return (
    <div className="Knjiga">
      <Slika src={`./images/books/${image}`} alt={`${name} image`} />
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
          <strong>Author:</strong>
          <span>{author}</span>
        </div>
        <div className="text-field">
          <strong>Citat:</strong>
          <span>
            <em>"{quote}"</em>
          </span>
        </div>
      </div>
    </div>
  );
}
