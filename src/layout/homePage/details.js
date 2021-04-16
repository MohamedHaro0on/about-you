import React from "react"
import { Col, Row } from "reactstrap"
import img from "../../assets/images/03_Stats.png"

export const Details = ({ details }) => {

    return (
        <Row className="mt-4">
            <Col xs='12' md="6" lg="6">
                <img src={img} className="img-fluid" title="about you" alt='about you' aria-label = "About you"/>
            </Col>
            <Col xs="12" lg={"6"} className="p-2 d-flex align-items-center">
                <div>
                    {details.map(({ number, name }, index) => {
                        return (
                            <div className="my-5" key={index}>
                                <p className="title font-weight-bold my-0 p-0 playFair"> {number}</p>
                                <p className="text-dark mt-3 disc">
                                    {name}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </Col>
        </Row>
    )
}