import React from 'react'
import Rating from './Rating';
import './TripModal.scss';

const TripModal = ({trip, onClose}) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <img src={trip.image} alt={trip.name} />
        <h2>{trip.name}</h2>
        <Rating rating={trip.rating}/>
        <p>{trip.long_description}</p>
      </div>
    </div>
  )
}

export default TripModal