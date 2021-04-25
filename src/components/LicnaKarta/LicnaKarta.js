import React from 'react';
import './LicnaKarta.css';

import Slika from '../Slika/Slika';

export default function LicnaKarta({ name, bdate, city, image }) {
  return (
    <div className="LicnaKarta">
      <div className="image-container">
        <Slika src={`./images/people/${image}`} alt={`${name} image`} />
      </div>
      <div className="text-container">
        <div className="text-field">
          <strong>Ime i prezime:</strong>
          <span>{name}</span>
        </div>
        <div className="text-field">
          <strong>Datum rođenja:</strong>
          <span>{bdate}</span>
        </div>
        <div className="text-field">
          <strong>Grad:</strong>
          <span>{city}</span>
        </div>
      </div>
    </div>
  );
}
