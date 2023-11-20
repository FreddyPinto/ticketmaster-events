import { useNavigate } from "react-router-dom";

import EventItem from "./components/EventItem";

const Events = ({ searchTerm, events }) => {
        const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`);
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
