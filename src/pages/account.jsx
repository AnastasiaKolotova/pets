import React from 'react';
import Header from "../components/header";
import Modal from "../components/modal";
import Footer from "../components/footer";
import Profile from "../components/profile";
import Added from "../components/addedcard";
import {Link} from "react-router-dom";

const Account = () => {
    return (
        <div className="body">
            <Header/>
            <Modal/>
            <main style={{"minHeight":"70vh"}}>
                <h1 className="title">Личный кабинет</h1>
                <Profile/>
                <h1 className="title">Добавленные объявления</h1>
                <Link to='/add_ad' className="button">Добавить объявление</Link>

                <div className="cards d-flex flex-wrap justify-content-around">
                    <Added/>
                </div>

                <nav aria-label="Page navigation example" className="m-3">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </main>
            <Footer/>
        </div>
    );
};

export default Account;