import { useEffect, useState } from "react";
import { Row, Col, CardImg } from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import axios from "axios"


export default function Contagion() {

  const[veri, setVeri]=useState([]);
  const[cards, setCards]=useState([]);
  useEffect(() => {
    const fetchData=async()=>{
      const response=await axios.get("data.json")
      setVeri(response.data.contagionPage)
      setCards(response.data.contagionPage.cards)
    }
   fetchData();
  });

  
    return (
      <div className="container mt-2">
         <Row>
               <Col md className="mt-2">
               <Card className="card border-0">
                 <CardBody>
                   <CardTitle tag="h5">{veri.title}</CardTitle>
                   <CardSubtitle tag="h6" className="mb-2 text-muted">
                     {veri.subtitle}
                   </CardSubtitle>
                   <CardText>
                 {veri.description}
                   </CardText>
                 </CardBody>
               </Card>
             </Col> 
        </Row>
        <Row>
          {cards.map( card => (
            <Col md className="mt-2">
            <Card key={Card.title}>
            <CardImg src={card.src}></CardImg>

              <CardBody>
                <CardTitle tag="h5">{card.title}</CardTitle>
            
                <CardText>
                {card.description}
                </CardText>
              </CardBody>
            </Card>
          </Col>            
          ))
          }
                  
        </Row>
      </div>
    );
  }

