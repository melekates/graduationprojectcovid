import { Col, Row } from "reactstrap";
import Contagion from "./Contagion";
import Map from "./Map";
import Overview from "./Overview";
import Prevention from "./Prevention";
import Symptomps from "./Symptomps";

export default function MainPage() {
  return (
 
    <div>
      <Row>
        <Col md>
          <Overview/>
        </Col>
      </Row>

      <Row>
        <Col md>
          <Contagion/>
        </Col>
      </Row>

      <Row>
        <Col md>
          <Symptomps/>
        </Col>
      </Row>

      <Row>
        <Col md>
          <Prevention/>
        </Col>
      </Row>

      <Row>
        <Col md>
          <Map />
        </Col>
      </Row>
    </div>
  );
}
