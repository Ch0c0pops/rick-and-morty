import React from 'react';
import PaginationComponent from "./PaginationComponent";
import SearchBar from "./SearchBar";
import CardsList from "./CardsList";

const MainWindow: React.FC = () => {
    return (
        <>
            <PaginationComponent/>
            <SearchBar/>
            <CardsList/>
        </>
    );
};

export default MainWindow;