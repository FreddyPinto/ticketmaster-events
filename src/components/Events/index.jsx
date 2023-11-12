import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";

const Events = () => {
    const [data] = useState(eventsJSON);
    const { _embedded: { events } } = data;

    const handleEventItemClick = (id) => {
        console.log('Evento clickeado: ',id);
    }

    return (
        <div>
            Eventos
            {events.map((event) => (
                <EventItem
                    key={event.id}
                    name={event.name}
                    info={event.info}
                    image={event.images[0].url}
                    onEventClick={handleEventItemClick}
                    id={event.id}
                />
            ))}
        </div>
    );
}

export default Events;
