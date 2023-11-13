import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";

const Events = ({ searchTerm }) => {
    const [data] = useState(eventsJSON);
    const { _embedded: { events } } = data;

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

    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
}

export default Events;
