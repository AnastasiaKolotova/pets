import React from 'react';
import Header from "../components/header";
import Modal from "../components/modal";
import Footer from "../components/footer";
import Registration from "../components/registr";

const Signup = () => {
    return (
        <div className="body">
            <Header/>
            <Modal/>
            <main style={{"minHeight":"70vh"}}>
                <h1 className="title">Регистрация</h1>
                <Registration/>
            </main>
            <Footer/>
        </div>
    );
};

export default Signup;