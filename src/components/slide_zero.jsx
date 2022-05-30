import React from 'react';

const Slide_zero = (props) => {
    return (

        <div className="carousel-item active">
            <img src={'http://pets.сделай.site/'+props.slider.image} className="img_slide" alt="рисунок животного"/>

            <p className="titles_card">id:</p>
            <p className="w-50">{props.slider.id}</p>

            <p className="titles_card">Вид животного:</p>
            <p className="w-50">{props.slider.kind}</p>

            <p className="titles_card">Описание:</p>
            <p className="w-50">{props.slider.description}</p>
        </div>

    );
};

export default Slide_zero;