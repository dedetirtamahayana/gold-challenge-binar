import React from 'react'
import {Card} from 'react-bootstrap'
import './CardItem.css'
const CardItem = (props) => {
    const{cardTitle, cardText, cardImage,cardAlt} = props;
  return (
       <div>
       <Card>
         <Card.Body>
            <img src={cardImage} alt={cardAlt} />
             <h5 className='card-title'> {cardTitle} </h5>
             <p className='fw-bold'> {cardText} </p>
         </Card.Body>
       </Card>
     </div>
  )
}

export default CardItem
