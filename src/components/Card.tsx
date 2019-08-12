import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard: React.FC<CardProp> = ({ title, desc, buttonTitle }) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                {/* <Button onClick={callback} variant="primary">{buttonTitle}</Button> */}
            </Card.Body>
        </Card>
    );
}

type CardProp = {
    title: string,
    desc: string,
    buttonTitle: string,
    // callback: (() => void)
}

export default CustomCard;