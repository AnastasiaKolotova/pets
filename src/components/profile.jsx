import React from 'react';
import avatar from '../image/аватар.jpg';

const Profile = () => {
    return (
        <div className="p-3">
            <div className="d-flex flex-row flex-wrap m-auto p-3 w-50" style={{"minWidth": "400px"}}>
                <img src={avatar} className="m-auto img_card" alt="аватарка"/>

                <p className="titles_card">id:</p>
                <p className="w-50" style={{"minWidth": "250px"}}>326</p>

                <p className="titles_card">Телефон:</p>
                <p className="w-50" style={{"minWidth": "250px"}}>+7-911-456-78-78</p>

                <p className="titles_card">email:</p>
                <p className="w-50" style={{"minWidth": "250px"}}>leonid@yandex.ru</p>

                <p className="titles_card">Имя:</p>
                <p className="w-50" style={{"minWidth": "250px"}}>Леонид</p>

                <p className="titles_card">Дата регистрации:</p>
                <p className="w-50" style={{"minWidth": "250px"}}>26-06-2015</p>

                <p className="titles_card">Количество найденных животных:</p>
                <p className="w-50" style={{"minWidth": "250px"}}>2</p>

                <p className="titles_card">Количество объявлений:</p>
                <p className="w-50" style={{"minWidth": "250px"}}>4</p>
            </div>
            <button type="submit" className="button">Редактировать профиль</button>
        </div>
    );
};

export default Profile;