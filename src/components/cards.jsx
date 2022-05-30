import React, {useEffect, useState} from 'react';
import Card from './card';
//import ReactDOM from 'react-dom/client';
//import moment from "moment";

function my_requests (pets, setPets) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer"+localStorage.token);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders
    };

    fetch("http://pets.сделай.site/api/pets", requestOptions)
        .then(response=>response.json())
        .then(response=>setPets(response))
}

const Cards = () => {
    let [pets, setPets]=useState({data:{orders:[]}})
    useEffect(()=>my_requests(pets, setPets), [])

    let cards=pets.data.orders.map((pet, index)=>
        <Card pet={pet} key={index}/>)

    /*let sorted = cards.sort((a, b) =>
        moment(b.date, 'YYYY-MM-DD') - moment(a.date, 'YYYY-MM-DD'))*/

    //let sorted = cards.sort(function(a,b) {return b.id-a.id});

    /*let sorted = cards.sort((prev, next) => {
        if ( prev.kind < next.kind ) return -1;
        if ( prev.kind < next.kind ) return 1;
    });*/

    console.log(cards);

    return (
        <div className='d-flex flex-wrap justify-content-around cards'>
            {cards}
        </div>
    );
};

export default Cards;