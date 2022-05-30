import React from 'react';
import logo from '../image/logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to='/main' className="navbar-brand"><img src={logo} className="w-50" alt="logo"/></Link>
                    <Link to='/main' className="navbar-brand"><b className="logo1">GET <b className="logo2">PET</b> BACK</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/main' className="nav-link">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/profile' className="nav-link">Личный кабинет</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/search' className="nav-link">Поиск по объявлениям</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="button" data-bs-toggle="modal" data-bs-target="#signinModal">Войти</button>
                        </div>
                        <div className="d-flex">
                            <Link to='/registration' className="button">Регистрация</Link>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Поиск на сайте..."
                                   aria-label="Search"/>
                            <button className="butt" type="submit">Поиск</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;