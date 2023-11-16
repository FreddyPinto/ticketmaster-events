import { useState, useEffect } from 'react';

import eventsJSON from '../data/events.json';

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setTimeout(() => {
            try {
                setData(eventsJSON);
                setLoading(false);
            } catch (error) {
                setError(error);
            }

        }, 4000);
        // Load API call
    }, []);

    return {
        events: data?._embedded?.events || [],
        loading,
        error,
    };
};

export default useEventsData;