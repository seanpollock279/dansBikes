import React from 'react';
import Header from '../Header/Header';

import Sean from '../../Assets/DisplayPhotos/sean.jpg';


export default function FeedCard() {
    return (
        <div>
            <Header />
            <div className="card">
                <div className="card__top">
                    <img className="card__img" src={Sean} />
                    <h1 className="card__name">Name</h1>
                    <p className="card__date">Date</p>
                    <p className="card__type">Ride Type</p>
                </div>
                <div className="card__bottom">
                    <p className="card__info">Distance: </p>
                    <p className="card__info">Duration</p>
                </div>
            </div> 
        </div>
    )
}
