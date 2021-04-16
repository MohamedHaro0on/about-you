import React from "react";
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
export const AboutYou = ({ heading, children, myImg }) =>
(
    <Row className="mx-auto d-flex align-items-center mt-5">
        <Col className="py-4" xs="12" lg="6">
            <h2 className="font-weight-bold text-uppercase playFair my-2"> {heading}</h2>
            <p>
                {children}
            </p>
            <Link to="/">
                <button className="btn btn-outline-dark text-uppercase px-4"> More</button>
            </Link>
        </Col>
        <Col xs={"12"} lg={"6"} md="12">
            <img className="img-fluid" title="AboutYou" src={myImg} alt="About You " />
        </Col>
    </Row>
)