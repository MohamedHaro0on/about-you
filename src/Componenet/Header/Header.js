import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/download.svg";
import "./header.css";
import { Links } from "./Links"

const HeaderRoutes = () => {
  return Links.map(({ name, children, to }, index) => {
    if (children) {
      return (
        <li className="nav-item dropdown" key = {index}>
          <div>
            <Link
              className="nav-link dropdown-toggle"
              id={`${name}`}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              to={to}
              aira-label="open sublist"
            >
              {name}
            </Link>
            <div className="dropdown-menu" aria-labelledby={`#${name}`}>
              {
                children.map((child, number) => {
                  return (
                    <div key={child.name}>
                      <Link className="dropdown-item" to={child.to} >{child.name} </Link>
                      {child.grandChildren &&
                        <ul className="list-unstyled p-0">
                          {child.grandChildren.map((_grandChildren) => {
                            return (
                              <li key={_grandChildren.name}>
                                <Link className="dropdown-item" to={_grandChildren.to} >
                                  {_grandChildren.name}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      }
                    </div>
                  );
                })}
            </div>
          </div>
        </li>
      )
    }
    else {
      return (
        <li className="nav-item" key = {index}>
          <Link className="nav-link" to={to}>
            {name}
          </Link>
        </li>
      )
    }
  })
};

export const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top bg-white col-lg-11 col-sm-12 col-md-12 mx-auto">
      <Link className="navbar-brand" to="/about-you">
        <img src={Logo} className="img-fluid" to="/" alt="About You" title="About You" />
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 list-list-unstyled p-0">
          <HeaderRoutes />
        </ul>
      </div>
    </nav>
  );
}
export default Header;