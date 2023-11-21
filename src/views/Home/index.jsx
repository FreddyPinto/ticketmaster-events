import { useEffect, useState, useRef } from "react";
import ReactPaginate from "react-paginate";

import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";
import styles from "./Home.module.css";

const Home = () => {
    const { events, loading, error, fetchEvents, page } = useEventsData();
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef();

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`);
    };

    const handlePageClick = ({ selected }) => {
        console.log(selected);
        fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
    };

    const renderEvents = () => {
        if (loading) {
            return <div>Cargando...</div>;
        }

        if (error) {
            return <div>Error</div>;
        }

        return (
            <div>
                <Events searchTerm={searchTerm} events={events} />;
                <ReactPaginate
                    className={styles.pagination}
                    nextClassName={styles.next}
                    previousClassName={styles.previous}
                    pageClassName={styles.page}
                    activeClassName={styles.activePage}
                    disabledClassName={styles.disabledPage}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page.totalPages}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        );
    };

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}
        </>
    );
};

export default Home;
