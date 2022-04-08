import React from 'react';
import { Card, Container } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews/useReviews';
import Hero from '../Hero/Hero';
import { AiFillStar } from 'react-icons/ai';
import "./Home.css";


const Home = () => {
const [reviews, setReview] = useReviews();
const reviewItem = reviews.slice(0, 3);


    return (
        <div>
            <Hero />
        <Container>
             <div className ="review-container">
            {
                reviewItem.map(items =>  
        <Card>
            <Card.Body>
            <Card.Title>Name: {items.name}</Card.Title>
            <Card.Text>
                <p>E-mail: {items.email}</p>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p className='ratting-p'>Ratting: {items.rating}
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
        )}
    </div>
        </Container>
        </div>
        
    );
};

export default Home;