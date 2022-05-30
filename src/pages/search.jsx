import React from 'react';
import Header from "../components/header";
import Modal from "../components/modal";
import Footer from "../components/footer";
import Searching from "../components/searching";

const Search = () => {
    return (
        <div className="body">
            <Header/>
            <Modal/>
            <main style={{"minHeight":"70vh"}}>
                <h1 className="title">Поиск по объявлениям</h1>
                <Searching/>
            </main>
            <Footer/>
        </div>
    );
};

export default Search;