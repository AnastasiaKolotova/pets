import React from 'react';

const Card = (props) => {
    return (
        <div className="position-relative card1">
            <img src={'http://pets.сделай.site/'+props.pet.photos} className="img_card" alt="рисунок животного"/>

            <p className="titles_card">id:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.pet.id}</p>

            <p className="titles_card">Имя:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.pet.name}</p>

            <p className="titles_card">Телефон:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.pet.phone}</p>

            <p className="titles_card">Вид животного:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.pet.kind}</p>

            <p className="titles_card">Описание:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.pet.description}</p>

            <p className="titles_card">Номер чипа:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.pet.mark}</p>

            <p className="titles_card">Район:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.pet.district}</p>

            <p className="titles_card">Дата:</p>
            <p className="w-50" style={{minWidth: '300px'}}>{props.pet.date}</p>
        </div>
    );
};

export default Card;