import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({review}) => {
    return (
        <div>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>{review.name}</Card.Title>
            <Card.Text>
                <p>{review.email}</p>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted"></small>
            </Card.Footer>
        </Card>
    </div>
    );
};

export default Review;