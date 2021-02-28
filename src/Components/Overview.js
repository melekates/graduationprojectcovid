import axios from "axios";
import {  useEffect, useState } from "react";
import { Row, Col, Media } from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function Overview() {
  const [veri, setVeri] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("data.json");
      setVeri(response.data.indexPage);
    };
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
              <CardText>{veri.description}</CardText>
              <Button  className="btn btn-danger">Let Us Help</Button>

            </CardBody>
          </Card>
        </Col>
        <Col md className="mt-2">
          <Media className="Media">
            <Media left>
              <Media
                object
                src="evdeKal.png"
                alt="Generic placeholder image"
                width="100%"
              />
            </Media>
          </Media>
        </Col>
      </Row>
      <Row>
        <Col md className="mt-2">
          <Media className="Media">
            <Media left>
              <Media
                object
                src="mikropGrup.png"
                alt="Generic placeholder image"
                width="100%"
              />
            </Media>
          </Media>
        </Col>
        <Col md className="mt-2">
          <Card className="card border-0">
            <CardBody>
              <CardTitle tag="h5">{veri.title2}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {veri.subtitle2}
              </CardSubtitle>
              <CardText>{veri.description2}</CardText>
              <button type="button" class="btn btn-danger">Learn More</button>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
