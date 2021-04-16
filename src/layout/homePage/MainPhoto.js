import React from "react";
import { Col, Row } from "reactstrap";
export const MainPhoto = ({ myCss, children }) => {
  return (
    <Row className={myCss}>
      <Col xs="12" md="6" lg="5" className="d-flex align-items-center">
        <h1 className="text-white my-4 MainPhototitle font-weight-bolder playFair">
          {children}
        </h1>
      </Col>
    </Row>
  );
}