import React from 'react';

const Slide = (props) => {
    return (

        <div className="carousel-item">
            <img src={'http://pets.сделай.site/'+props.slider.image} className="img_slide" alt="рисунок животного"/>

            <p className="titles_card">id:</p>
            <p>{props.slider.id}</p>

            <p className="titles_card">Вид животного:</p>
            <p>{props.slider.kind}</p>

            <p className="titles_card">Описание:</p>
            <p>{props.slider.description}</p>
        </div>
    );
};

export default Slide;