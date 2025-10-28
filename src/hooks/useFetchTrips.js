import { useEffect, useState } from "react";

export default function useFetchTrips() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch trips');
                return res.json();
            })
            .then(data => setTrips(data.trips))
            .catch(setError)
            .finally(() => setLoading(false))
    }, []);
    return { trips, loading, error };
}