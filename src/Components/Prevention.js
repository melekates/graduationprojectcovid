import axios from "axios";
import {  useEffect, useState } from "react";
import { Row, Col, Media } from "reactstrap";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default function Prevention() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("data.json");
      setCards(response.data.preventionPage);
    };
    fetchData();
  });

  return (
    <div className="container mt-2">
      <Row>
        <Col md className="mt-2">
          <Card className="card border-0">
            <CardBody>
              <CardTitle tag="h5">Covid-19</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                What Should We Do
              </CardSubtitle>
              <CardText>
                Corona viruses are a type of virus. There are many different
                kinds, and some cause disease. A newly identified type has
                caused
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {cards.map((card) => (
        <Row>
        <Col md className="mt-2">
          <Media>
            <Media left>
              <Media object src={card.id} alt="..." />
            </Media>
            <Media body>
              <Media heading>{card.title}</Media>
             {card.description}
            </Media>
          </Media>
        </Col>

        <Col md className="mt-2">
          <Media className="Media">
            <Media left >
              <Media
                object
                src={card.src}
                alt="Generic placeholder image"
                width="100%"
              />
            </Media>
          </Media>
        </Col>
      </Row>
        
      ))}
    </div>
  );
}
