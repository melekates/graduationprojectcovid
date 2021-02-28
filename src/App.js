import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Contagion from "./Components/Contagion";
import Symptomps from "./Components/Symptomps";
import Overview from "./Components/Overview";
import Prevention from "./Components/Prevention";
import Map from "./Components/Map";
import NavbarCom from "./Components/NavbarCom";
import Footer from "./Components/FooterCom";
import MainPage from "./Components/MainPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Row>
            <Col md>
              <NavbarCom />
            </Col>
          </Row>
          <Switch>
          <Route path="/" exact component={MainPage} />

          <Route path="/overview" component={Overview} />
          <Route path="/prevention" component={Prevention} />
          <Route path="/symptomps" component={Symptomps} />
          <Route path="/contagion" component={Contagion} />
          <Route path="/statics" component={Map} />

          </Switch>



          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}
