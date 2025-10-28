import React from 'react'
import useFetchTrips from '../hooks/useFetchTrips'
import TripCard from '../components/TripCard';

const TripList = () => {
    const {trips, loading, error} = useFetchTrips();
  return (
    <div className='container'>
        <div className='controls'>
            <input type="text" placeholder='Search trip...' />
            <button>Sort</button>
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