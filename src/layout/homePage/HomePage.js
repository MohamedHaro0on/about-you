import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { MainPhoto } from "./MainPhoto";
import { AboutYou } from "./AboutYou"
import "./HomePage.css";
import { Col } from "reactstrap"
import Card from "./Card"
import { Details } from "./details"
import { AboutUs } from "./aboutUs"
import { LatestNews } from "./LatestNews"
import aboutYou from "../../assets/images/02_AboutYou-688x583.png";


let details = [
  { name: "brands online", number: "1200" },
  { name: "products online", number: "250.000" },
  { name: "app installs", number: "7 million" },
  { name: "active customers per month", number: "5 million" },
]

const HomePage = () => {
  return (
    <Col xs="12" className="mx-auto" sm="12" lg="11">
      <MainPhoto myCss="MainPhoto mt-1 mb-3">
        The most  Inspiring and Personal Fashion Online Shop in Europe
        </MainPhoto>
      <AboutYou heading="ABOUT YOU ..." myImg={aboutYou} >
        â€¦is one of the fastest growing eCommerce companies in Europe and Hamburgâ€™s first unicorn with a
        value of more than USD 1 billion. As a fashion and technology corporation, along with our
        strong team, our ambition is to digitalize the classic shopping stroll by creating an inspiring
        and personalized shopping experience on the smartphone.
        </AboutYou>
      <Details details={details} />
      <Card />
      <AboutUs />
      <LatestNews />
    </Col>
  );
}
export default HomePage;