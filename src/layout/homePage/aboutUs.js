import React from "react"
import { Col } from "reactstrap"


export const AboutUs = () => {

    return (
        <Col className="mx-auto py-4 mt-5 " lg="12" >
            <h2 className="title mb-5 text-center font-weight-bold"> Learn more about who we are</h2>
            <iframe title="HomePage" width="100%" height="600" src="https://www.youtube.com/embed/acYbrTxdZtI"
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </Col>
    )
}