import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgShoppingBag } from "react-icons/cg";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md">
        <Container fluid className="p-3">
          <Navbar.Brand href="#home" className="mx-lg-5">
            <div className="logo">
              <img src={logo} alt="logo" />
              <span className="brand-span">amazon</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav className="d-flex mx-lg-5 align-items-start align-items-md-center gap-1">
              <Nav.Link href="#collections">Collections</Nav.Link>
              <Nav.Link href="#brand">Brands</Nav.Link>
              <Nav.Link href="#new">New</Nav.Link>
              <Nav.Link href="#sales">Sales</Nav.Link>
              <Nav.Link href="#deets">ENG</Nav.Link>
              <CgShoppingBag className="shopping-bag" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
