import React from 'react'

const TripCard = ({
    name,
    image,
    description,
    rating
}) => {
  return (
    <div className='trip-card'>
        <img src={image} alt={name} className='trip-image'/>
        <h3 className='trip-name'>{name}</h3>
        <div className='trip-content'>
            <p className='rating'>{rating}</p>
            <p className='description'>{description}</p>
            <button>More Info</button>
        </div>
    </div>
  )
}

export default TripCard