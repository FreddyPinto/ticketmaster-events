import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/EventItem";

const Events = ({ searchTerm }) => {
    const { events, loading, error } = useEventsData();

    const handleEventItemClick = (id) => {
        console.log('Evento clickeado: ',id);
    }

    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((event) => event.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
        }

        return eventsFiltered.map((event) => {
            return (
                <EventItem
                    key={event.id}
                    info={event.info}
                    id={event.id}
                    name={event.name}
                    image={event.images[0].url}
                    onEventClick={handleEventItemClick}
                />
            );
        });
    };

    if (error) {
        return <div>Error</div>; 
    }

    if (loading) {
        return <div>Cargando...</div>; 
    }

    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
}

export default Events;
