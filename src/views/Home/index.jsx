import { useEffect, useState, useRef } from "react";

import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";

const Home = () => {
    const { events, loading, error, fetchEvents } = useEventsData();
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef();

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`);
    };

    if (error) {
        return <div>Error</div>; 
    }

    if (loading) {
        return <div>Cargando...</div>; 
    }

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {loading ? <div>Cargando...</div> : <Events searchTerm={searchTerm} events={events} />}
            {!!error && <div>Error</div>}
        </>
    );
};

export default Home;
