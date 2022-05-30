import React from 'react';
import photo from "../image/pets/кошка.jpg";
import {Link} from "react-router-dom";

const Added = () => {
    return (
        <div className="position-relative card1">
            <img src={photo} alt="рисунок животного" className="img_card"/>
            <div>
                <p className="titles_card">id:</p>
                <p>13</p>

                <p className="titles_card">Вид животного:</p>
                <p>Кошка</p>

                <p className="titles_card">Описание:</p>
                <p>Потерялась кошка, пушистая, серая.
                    Любит играть, ласковая.</p>

                <p className="titles_card">Номер чипа:</p>
                <p>ca-001-spb</p>

                <p className="titles_card">Район:</p>
                <p>Василеостровский</p>

                <p className="titles_card">Дата:</p>
                <p>24-03-2020</p>
            </div>

            <Link to='/edit_ad' className="button">Редактировать объявление</Link>

            <div className="position-absolute text-danger"
                 style={{"top":"15px", "right": "15px", "cursor": "pointer"}}>&#10060;
            </div>

        </div>
    );
};

export default Added;