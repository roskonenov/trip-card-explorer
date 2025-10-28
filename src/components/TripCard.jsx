import React from 'react'
import './TripCard.scss';
import { FaStar } from "react-icons/fa";

const TripCard = ({
  name,
  image,
  description,
  rating
}) => {
  return (
    <div className='trip-card'>
      <img src={image} alt={name} className='trip-image' />
      <div className='trip-content'>
        <h3 className='trip-name'>{name}</h3>
        <p className='rating'><FaStar className='icon'/> {rating}</p>
        <p className='description'>{description}</p>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default TripCard