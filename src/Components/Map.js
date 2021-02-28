import { Component } from "react";
import { Col, Media, Row } from "reactstrap";
import LiveStatics from "./LiveStatics";

export default class Map extends Component {
  constructor(props) {
    super (props);
    this.state = {};
  }
  render() {
    return (
      <div className="container mt-2">
        <Row>
          <Col md className="mt-2">
            <Media className="Media">
              <Media left >
                <Media
                  object
                  src="map.png"
                  alt="Generic placeholder image"
                  width="100%"
                />
              </Media>
            </Media>
          </Col>
          <Col md className="mt-2">
            <LiveStatics></LiveStatics>
          </Col>
        </Row>
      </div>
    );
  }
}
