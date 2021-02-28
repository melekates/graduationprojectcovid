import { Col, Row } from "reactstrap";
import NavbarCom from "./NavbarCom";

export default function Footer(){
    return(
        <div className="container mb-2">
            <Row>
                
                <Col md>
                <NavbarCom/>
                </Col>
                <Col md>
                <img src="iconGroup.png" alt="..."></img>
                </Col>
            </Row>
            <Row>
                <Col md>
                    2021 @ All Rights Reserved by Melek 
                </Col>
            </Row>

        </div>
    )
}