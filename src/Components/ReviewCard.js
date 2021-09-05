import React from 'react';
import { starRating, formatPayment, formatSize, formatDate } from '../utils/util';

// const ReviewCard = () => {
    const ReviewCard = ({id, key, date, body, title, rating, size, payment, kindness, vibe, gender, dateAgain, safetyMeter, createdAt }) => {



    return (
        <div className="each-review" id={id}>
        <h2 className="review-title">Client's Review from the date on {formatDate(createdAt)}:</h2>
            {body && <p className="body">"{body}"</p>}
            <p className="safety-meter">How Safe Did I Feel: {safetyMeter}</p>   
            <p className="rating">{starRating(rating)} </p>       
            {size && <p className="size-data">Size: {formatSize(size)}</p>}
            {payment && <p className="payment-data">How Well Did They Pay: {formatPayment(payment)}</p>}            
            {kindness && <p className="kindness-meter">Kindness: {kindness}/10</p>}          
            {vibe && <p className="vibe-data">Vibe: {vibe}/10</p>}
            {dateAgain && <p className="date-again">Would I Date Them Again? {dateAgain}</p>}
            {gender && <p className="gender">Gender: {gender}</p>}  
            {/* <p className="date">{date}</p>    */}
            {/* <p className="vibe-data">Hygiene: {hygiene}</p>   
            <p className="date-again">How Punctual Were They? {punctuality}</p>   
            <p className="gender">Condom Usage: {condomUsage}</p>   
            <p className="date-again">How Long Did the Date Last? {dateDuration}</p>   
            <p className="gender">Kinks: {kinks}</p>    */}
        </div>
    );
};

export default ReviewCard;