import { useState } from 'react';

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchEvents = async (params) => {
        try {
            const response = await fetch('https://app.ticketmaster.com/discovery/v2/?apikey=2N9nueA04IyQUWKKKrYBOtwWjmqEpTsp&countryCode=MX');
            const data = await response.json();

            setData(data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    return {
        events: data?._embedded?.events || [],
        loading,
        error,
    };
};

export default useEventsData;