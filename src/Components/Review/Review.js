import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import "./Review.css";

const Review = ({review}) => {
    return (
        <div>
        <Card>
            <Card.Body>
            <Card.Title>Name: {review.name}</Card.Title>
            <Card.Text>
                <p>Buyer say: <strong>{review.review}</strong></p>
                <p>E-mail: {review.email}</p>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p className='ratting-p'>Ratting: {review.rating}
            </p>
            <ul  className='ratting'>
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
                <li><AiFillStar /></li>
            </ul>
            
            </Card.Footer>
        </Card>
    </div>
    );
};

export default Review;