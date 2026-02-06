import React, { useState, useMemo } from 'react'
import useFetchTrips from '../hooks/useFetchTrips'
import TripCard from '../components/TripCard';
import Spinner from '../components/Spinner';
import './TripList.scss'
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import TripModal from '../components/TripModal';

const TripList = () => {
    const { trips, loading, error } = useFetchTrips();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortByRating, setSortByRating] = useState('');
    const [selectedTrip, setSelectedTrip] = useState(null);

    const filteredTrips = useMemo(() => [...trips]
        .filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => sortByRating === '' ? 0 : sortByRating === 'asc' ? a.rating - b.rating : b.rating - a.rating), [trips, searchQuery, sortByRating]);

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
                            <FaLongArrowAltDown className='icon' /> :
                            <FaLongArrowAltUp className='icon' />}
                </button>
            </div>
            {loading ? <Spinner />
                : error ? <p className='error-message'>Error loading trips!</p>
                    : <section className='trip-list'>
                        {filteredTrips.map((trip) => (
                            <TripCard
                                key={trip.id}
                                trip={trip}
                                onMoreInfo={setSelectedTrip}
                            />
                        ))}
                    </section>
            }

            {selectedTrip &&
                <TripModal
                    trip={selectedTrip}
                    onClose={() => setSelectedTrip(null)} />}
        </div>
    )
}

export default TripList