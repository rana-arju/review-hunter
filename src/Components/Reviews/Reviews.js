import React from 'react';
import {  Container } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews/useReviews';
import Review from '../Review/Review';
import './Reviews.css';
const Reviews = () => {
    const [reviews, setReview] = useReviews();
    return (
        
        <Container>
            <h2 className='title'>All Reviews</h2>
            <div className ="review-container">
            {
                reviews.map(review => <Review
                key = {review.id}
                review = {review}
                />)
            }
           
           </div>
        </Container>
    );
};

export default Reviews;