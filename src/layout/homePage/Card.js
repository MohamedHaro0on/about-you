import React from "react";
import Vision from "../../assets/images/04_Vision.png";
import B2B from "../../assets/images/05_B2B.png";
import Markets from "../../assets/images/06_Markets.png";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";
const data = [
  {
    img: Vision,
    disc: `We believe everybody should feel great to show themselves. We accept people just the way 
              they are and support them in expressing their personality through fashion – because fashion can help people
              to stand out and fit in at the same time. At ABOUT YOU we want to empower people by inspiring them with a
              diverse range of people, brands and styles.`,
    to: "/",
    title: "Our Vision"
  },
  {
    img: B2B,
    disc: `We believe everybody should feel great to show themselves. We accept people just the way 
      they are and support them in expressing their personality through fashion – because fashion can help people
      to stand out and fit in at the same time. At ABOUT YOU we want to empower people by inspiring them with a
      diverse range of people, brands and styles.`,
    to: "/",
    title: "B2B Solutions"
  },
  {
    img: Markets,
    disc: `We believe everybody should feel great to show themselves. We accept people just the way 
      they are and support them in expressing their personality through fashion – because fashion can help people
      to stand out and fit in at the same time. At ABOUT YOU we want to empower people by inspiring them with a
      diverse range of people, brands and styles.`,
    to: "/",
    title: "Markets & Expansion"
  }
]
const Cards = () => {
  return <Row className="mt-5">{
    data.map((element, index) => {
      return (
        <Col xs="12" lg="8" className="mx-auto align-items-center row my-2" dir={index !== 1 ? "rtl" : null} key = {index}>
          <Col xs="12" lg="6" className="col_container">
            <div className="my_card position-absolute bg-light"></div>
            <div className={"position-relative z_index  p-3"}>
              <h3 className="font-weight-bold my-3 playFair title"> {element.title}</h3>
              <p className="text-muted ">{element.disc}</p>
              <Link
                to={element.to}
                className="text-uppercase text-decoration-underline text-muted"
              >
                Learn More
                </Link>
            </div>
          </Col>
          <Col xs="12" lg="6" className="mt-3">
            <img src={element.img} className="img-fluid" title="About you" alt="About You" />
          </Col>
        </Col>
      );
    })
  }</Row>;
}
export default Cards;