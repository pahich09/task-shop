import React, {useState} from "react"
import ReactCardFlip from "react-card-flip";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './card.scss'
import {Badge, ListGroup} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

export const CardItem = ({card}) => {
  const [isFlipped, changeFlipped] = useState(false)
  const onClickFlip = () => {
    changeFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card onClick={onClickFlip} bg={"light"} className={'mb-4 '}>
        <Card.Img variant="top" src={card.image}/>
        <Badge variant={"danger"}>Price: {card.price}</Badge>
        <Card.Body
          className={'d-flex justify-content-between flex-column text-center'}>
          <Card.Title>{card.name}</Card.Title>
          <div className='d-flex justify-content-between button_block'>
            <NavLink to={`/${card.name}`} className='btn btn-info'>More info</NavLink>
            <Button variant="success">Buy</Button>
          </div>
        </Card.Body>
      </Card>
      <Card onClick={onClickFlip} text={"white"} bg={"secondary"}
            className={'mb-4 '}>
        <Card.Header><h3>{card.name}</h3></Card.Header>
        <ListGroup>
          <ListGroup.Item variant="light">Status: <strong>{card.status}</strong></ListGroup.Item>
          <ListGroup.Item variant="dark">Gender: <strong>{card.gender}</strong></ListGroup.Item>
          <ListGroup.Item
            variant="light">Species: <strong>{card.species}</strong></ListGroup.Item>
          <ListGroup.Item
            variant="dark">Location: <strong>{card.location}</strong></ListGroup.Item>
        </ListGroup>
      </Card>
    </ReactCardFlip>
  )
}


