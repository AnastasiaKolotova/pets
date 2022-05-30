import React from 'react';
import Header from "../components/header";
import Modal from "../components/modal";
import Footer from "../components/footer";
import Form_Add from "../components/addad";

const Add_ad = () => {
    return (
        <div className="body">
            <Header/>
            <Modal/>
            <main style={{"minHeight":"70vh"}}>
                <h1 className="title">Добавление нового объявления</h1>
                <Form_Add/>
            </main>
            <Footer/>
        </div>
    );
};

export default Add_ad;