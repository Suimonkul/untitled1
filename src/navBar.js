import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #000000; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.5em;
    color: #FFFFFF;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Elite Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="ModalOne">Contact</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About we</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
export default NavigationBar