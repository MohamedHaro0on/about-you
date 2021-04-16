import React from "react";
import { MainPhoto } from "../homePage/MainPhoto"
import { Col } from "reactstrap"
import "./AboutUs.css"
import { AboutYou } from "../homePage/AboutYou"
import AboutUsImg from "../../assets/images/02_AboutYou-1-688x583.png"
import { LatestNews } from "../homePage/LatestNews"
import { AboutUs as MyAboutUs } from "../homePage/aboutUs"
import { Details } from "../homePage/details"



let details = [
    { name: "EUR revenue in fiscal year 2018/19", number: "461 million" },
    { name: "USD company value", number: " 1 billion" },
    { name: "10 markets", number: "in 5 years" },
    { name: "employees from over 40 nationalities", number: "600" },
]

export const AboutUs = () => {
    return (
        <Col xs="12" lg="11" md="11" className="mx-auto">
            <MainPhoto myCss="MainPhotoAboutUS">
                Europe's most Personal Shopping Destination
            </MainPhoto>
            <AboutYou heading="ABOUT YOU ..." myImg={AboutUsImg} >
                …is one of the fastest growing eCommerce companies in Europe and Hamburg’s first unicorn
                with a value of more than USD 1 billion. As a fashion and technology corporation, along with our strong team,
                our ambition is to digitalize the classic shopping stroll by creating an inspiring and personalized shopping experience
                on the smartphone. This is why we created ABOUT YOU, a shopping destination where people can discover fashion that really
                fits their personality from a range of more than 1.200 brands. With its consistent focus on personalization, inspiration
                and mobile shopping, ABOUT YOU has created sales in excess of €461 million in the fifth fiscal year 2018/19 and is now one
                of the largest fashion e-tailers in Germany.
            </AboutYou>
            <Details details={details} />
            <MyAboutUs />
            <LatestNews />
        </Col>
    )
}