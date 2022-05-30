import React from 'react';
import Header from "../components/header";
import Modal from "../components/modal";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Cards from "../components/cards";
import Subscribe from "../components/subscribe";

const Main = () => {
    return (
        <div className="body">
            <Header/>
            <Modal/>
            <main style={{"minHeight":"70vh"}}>
                <h1 className="title">Найденные животные</h1>
                <Slider/>

                <h1 className="title">Карточки найденных животных</h1>
                <div className="cards d-flex flex-wrap justify-content-around">
                    <Cards/>
                </div>

                <h1 className="title">Подписка на новости</h1>
                <Subscribe/>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;
