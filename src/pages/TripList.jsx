import React, { useState } from 'react'
import useFetchTrips from '../hooks/useFetchTrips'
import TripCard from '../components/TripCard';
import './TripList.scss'
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const TripList = () => {
    const { trips, loading, error } = useFetchTrips();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortByRating, setSortByRating] = useState('');

    const filteredTrips = trips
        .filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => sortByRating === '' ? 0 : sortByRating === 'asc' ? a.rating - b.rating : b.rating - a.rating);

    return (
        <div className='container'>
            <div className='controls'>
                <input
                    className='search-bar'
                    type="text"
                    placeholder='Search trip...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button
                    className='sort-button'
                    value={sortByRating}
                    onClick={() => setSortByRating(s => s === 'asc' ? 'desc' : 'asc')}>
                    Sort by rating
                    {sortByRating === '' ?
                        <FaStar className='icon' /> :
                        sortByRating === 'asc' ?
                            <FaLongArrowAltUp className='icon' /> :
                            <FaLongArrowAltDown className='icon' />}
                </button>
            </div>
            <section className='trip-list'>
                {filteredTrips.map((trip) => (
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