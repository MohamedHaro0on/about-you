import React from "react";
import one from "../../assets/images/ABOUT-YOU_PARI-2.0_lowres_13-380x245.jpg";
import two from "../../assets/images/ABOUT-YOU_Adventskalender_20195-380x245.jpg";
import three from "../../assets/images/B02V6991.jpg_cmyk-380x245.jpg"
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom"

const News = [
  {
    to: "/",
    img: one,
    title: `PARI exclusive for ABOUT YOU Nach großem Erfolg des Kollektionsdebüts: ABOUT YOU erweitert`,
    Disc: `Sorry, this entry is only available in German. For the sake of viewer convenience, the content is shown below in the alternative language. You may click the link to switch the active language.Star-Fotograf,`
  },
  {
    to: "/",
    img: two,
    title: `Innovationstreiber ABOUT YOU launcht einzigartigen Adventskalender`,
    Disc: `Sorry, this entry is only available in German. For the sake of viewer convenience, the content is shown below in the alternative language. You may click the link to switch the active language.ABOUT YOU startet`
  },
  {
    to: "/",
    img: three,
    title: "Lena Gercke x ABOUT YOU Märchenhafte CHRISTMAS DINNER PARTY im Stanglwirt für",
    Disc: `Sorry, this entry is only available in German. For the sake of viewer convenience, the content is shown below in the alternative language. You may click the link to switch the active language.Going am Wilden`
  }
]
export const LatestNews = () => {

  return (
    <Col xs={"12"} lg="11" className="mx-auto mt-5" >
      <Col xs="12" lg="12" className="my-3 text-center ">
        <h2 className="title font-weight-bold playFair"> Latest News </h2>
      </Col>
      <Row className="mx-auto">
        {News.map(({ img, title, Disc, to }, index) => {
          return (
            <Col xs="12" lg="4" md="6" className="p-2" key={index}>
              <img
                src={img}
                className={"img-fluid"}
                alt={title}
                title={title}
              />
              <h4 className="my-3 font-weight-bold small_title playFair">{title}</h4>
              <p className="text-muted">{Disc}</p>
              <Link
                to={to}
                className={
                  " text-dark  text-uppercase text-decoration-underline"
                }
              >
                {" "}
            Read More
          </Link>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
}
