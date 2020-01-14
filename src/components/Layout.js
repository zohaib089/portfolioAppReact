import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import Logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';




const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 50s linear infinite;
  font-size: .8rem;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background:  "black !important";
  color: "white";
transition: all 0.5s ease-in-out;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
   &:hover {
    background:#111;
    color: #fff;
    border: 2px solid #E69A8DFF;
  }
`;


export default class NavBar extends React.Component {


  render() {
    return (

      <>

        <Navbar expand="lg" style={{
          backgroundColor: "#fff",
          opacity: "0.5"
        }}

        >
          <Navbar.Brand href="/">
            <Rotate>
              <img

                src={Logo}
                width={64}
                height={64}

                style={{
                  backgroundColor: "black",
                  border: "2px solid lightBlue",
                  opacity: '0.9'
                }}

                className="d-inline-block align-top img-fluid"
                alt="zohaibPortfolioLogo"
              />
            </Rotate>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/">
                <Button style={{
                  color: "green"
                }}> <i style={{
                  color: "green"
                }} className="fa fa-home"></i> Home</Button>

              </NavLink>
              <NavLink to="/resume">  <Button style={{
                color: "blue"
              }}><i style={{
                color: "blue"
              }} className="fa fa-file"></i> Resume</Button></NavLink>
              <NavLink to="/projects">  <Button style={{
                color: "yellow"
              }}> <i style={{
                color: "yellow"
              }} className="fa fa-tasks"></i> Projects</Button></NavLink>
              <NavLink to="/contact"> <Button style={{
                color: "violet"
              }}><i style={{
                color: "violet"
              }} className="fa fa-address-book"></i> Admin</Button></NavLink>
              <NavLink to="/Login"> <Button style={{
                color: "#166557"
              }}>
                <img src="https://img.icons8.com/android/18/000000/login-rounded-right.png" />  Login</Button></NavLink>

              <NavLink to="/Register"> <Button style={{
                color: "#2D6E95"
              }}>
                <img src="https://img.icons8.com/color/18/000000/add-user-male--v2.png" /> Register</Button></NavLink>

            </Nav>

          </Navbar.Collapse>

        </Navbar>






      </>

    )
  }

}
