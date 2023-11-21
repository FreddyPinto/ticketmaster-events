import { useState } from "react";

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchEvents = async (params) => {
        try {
            const response = await fetch(
                `https://app.ticketmaster.com/discovery/v2/events.json?apikey=2N9nueA04IyQUWKKKrYBOtwWjmqEpTsp&countryCode=MX${params?.length ? params : ""
                }`
            );
            const data = await response.json();

            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    return {
        events: data?._embedded?.events || [],
        page: data?.page || {},
        loading,
        error,
        fetchEvents,
    };
};

export default useEventsData;
