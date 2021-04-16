import React from "react"
import { Links } from "../Header/Links"
import { Col } from "reactstrap"
import { Link } from "react-router-dom"
import "./Footer.css"
import { Button } from "reactstrap"
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
    const HandleToTheTop = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <Col className=" bg-footer position-relative">
            <Col className="text-light row mx-auto py-5 mt-5" xs="12" lg="7">
                {Links.map(({ to, children, name }, index) => {
                    return (
                        <Col xs="6" lg="3" key={index}>
                            <Link className="mt-3 text-light playFair" to={"/about-us"}> {name}</Link>
                            {children &&
                                <ul className="list-unstyled p-0">
                                    {children.map((child, number) => {
                                        return (
                                            <li key={child.name}>
                                                <Link to={"/about-us"} className=" text-light small" aria-label={` to ${child.name}`}>{child.name}</Link>
                                                <ul className="list-unstyled p-0">
                                                    {child.grandChildren && child.grandChildren.map(grandChild => {
                                                        return (
                                                            <li key={grandChild.name}>
                                                                <Link to={"/about-us"} className="text-light small " aria-label={`to ${grandChild.name}`}>{grandChild.name}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>

                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </Col>
                    )
                })}
            </Col>
            <Button color="outline-dark" className="toTheTop" onClick={HandleToTheTop}>
                <AiOutlineArrowUp />
            </Button>
        </Col>
    )
}
export default Footer;