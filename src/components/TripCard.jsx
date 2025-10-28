import React from 'react'
import './TripCard.scss';
import { FaStar } from "react-icons/fa";

const TripCard = ({
  name,
  image,
  description,
  rating
}) => {

  const stars = Array(5).fill(0);

  const colors = {
        yellow: "#ffb400",
        grey: "#797979ff"
    }

  return (
    <div className='trip-card'>
      <img src={image} alt={name} className='trip-image' />
      <div className='trip-content'>
        <h3 className='trip-name'>{name}</h3>
        <p className='rating'>
          {stars.map((_, index) => (
              <FaStar className='icon'
              key={index}
              color={rating > index ? colors.yellow : colors.grey}/>
          ))}</p>
        <p className='description'>{description}</p>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default TripCard