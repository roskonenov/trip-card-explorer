import React from 'react'
import useFetchTrips from '../hooks/useFetchTrips'
import TripCard from '../components/TripCard';
import './TripList.scss'

const TripList = () => {
    const {trips, loading, error} = useFetchTrips();
  return (
    <div className='container'>
        <div className='controls'>
            <input className='search-bar' type="text" placeholder='Search trip...' />
            <button className='sort-button'>Sort</button>
        </div>
        <section className='trip-list'>
            {trips && trips.map((trip) => (
                <TripCard 
                    key={trip.id}
                    name={trip.name}
                    image={trip.image}
                    description={trip.description}
                    rating={trip.rating}
                />
            ))}
        </section>
    </div>
  )
}

export default TripList