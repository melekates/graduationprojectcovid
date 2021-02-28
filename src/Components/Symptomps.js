import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Media, Row } from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function Symptomps (){
  const[veri, setVeri]=useState([]);
  useEffect(() => {
    const fetchData=async()=>{
      const response=await axios.get("data.json")
      setVeri(response.data.symptompsPage)
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
          <Col md className="mt-2">       
          <Media className="Media">
              <Media left>
                <Media object src={veri.src} alt="..." width="100%" />
              </Media>
          </Media>
          </Col>
        </Row>
      </div>
    );
  }

