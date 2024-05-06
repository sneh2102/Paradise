import React from "react";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import DashboardMenu from "../../Dashboard/DashboardMenu";
import AuthNavMenu from "../../Authentication/AuthNavMenu";
import logo from "../../../img/logo.png";
import "./Navbar.css";
import { useHistory } from "react-router";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

const Header = () => {
  const { user } = useAuth();
  const inputRef = useRef();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/plans?search=${inputRef.current.value}`);
  };
  
  


  return (
    <header>
      <nav>
        <Link to="/" style={{textDecoration: "none", color: "white"}}>
          <h3>Paradise</h3>
        </Link>
        <ul>
          <li>
            <Link to="/" className="a">
              Home
            </Link>
          </li>
          <li>{user &&<div className="a"> <DashboardMenu /></div>}</li>
          <li>
            <Link to="/plans" className="a">
              Plans
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="a">
              About us
            </Link>
          </li>
          <li>
           <div className="a">
            <div className="NavContainer">
           <form onSubmit={onSubmit} className="Navform">
  <input type="Navsearch" className="Navsearch" ref={inputRef} required/>
  <i class="fa fa-search glass"></i>
</form>
</div>
          </div>    
          </li>
            {!user ? (
              <>
                <li>
                  <Link to="/login" variant="link" className="a">
                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                  </Link>
                </li>
                <li>
                <Link to="/register" className="a">
                    Register
                  </Link>
                </li>
              </>
            ) : (<li>
              <div className="a"><AuthNavMenu /></div>
              </li>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
