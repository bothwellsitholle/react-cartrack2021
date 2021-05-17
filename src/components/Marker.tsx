import React from 'react';
import classes from './Marker.module.css';
import airplane from '../airplane1.png';
import {Link} from 'react-router-dom';

interface MarkerType {
  showDetails: () => void;
  flightData: (string | number) [];
  lat: number;
  lng: number; 
}

const Marker: React.FC <MarkerType> = ({
  showDetails,
  flightData,
  lat,
  lng,
}) => {

  const id = flightData[0];
  const name = flightData[1].toString().trim();
  const country = flightData[2];
  const altitude = flightData[5];
  const speed = flightData[6];
  const trackNumber = flightData[7];
  
  return (
    <Link
      className={classes.marker__link}
      onClick={showDetails}
      to={`/flightDetails/${id}/${name}/${country}/${lng}/${lat}/${altitude}/${speed}`}
    >
      <div className={classes.marker__wrapper}>
        <img
          style={{ transform: `rotateZ(${trackNumber}deg` }}
          src={airplane}
          alt='flight'
        />
        <div className={classes.marker__details}>
          <p>
            {flightData[1]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Marker;