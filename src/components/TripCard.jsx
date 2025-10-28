import React from 'react'
import './TripCard.scss';
import Rating from './Rating';

const TripCard = ({
  trip,
  onMoreInfo
}) => {
  return (
    <div className='trip-card'>
      <img src={trip.image} alt={trip.name} className='trip-image' />
      <div className='trip-content'>
        <h3 className='trip-name'>{trip.name}</h3>
        <Rating rating={trip.rating} />
        <p className='description'>{trip.description}</p>
        <button onClick={() => onMoreInfo(trip)}>More Info</button>
      </div>
    </div>
  )
}

export default TripCard