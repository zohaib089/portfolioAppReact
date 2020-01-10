import React, { useState } from 'react'
import { Row, Card, Button, Col, Nav, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Project from "./project/Project";
class Projects extends React.Component {
    state = {
        detailedProduct: {},
        reactProjects: [
            {
                id: 1,
                title: "PortoFolio Project",
                detail: `This Project is the project which your are visiting at moment this project is created by React
                ,React-timeline,React-bootstrap,Styled-components,React-router`,
                image: "../img/porto.gif"
            },
            {
                id: 2,
                title: "Ecommerce Project",
                detail: `Ecommerce Project is a Full Stack App which is built by using react,redux,Node,express,MongoBd
                ,Aws,Git,PayPal,Stripe,Material-UI,Styled-components,React-bootstrap`,
                image: "../img/ecom.gif"
            },
            {
                id: 3,
                title: "Data Management Project",
                detail: `This Project is a Full Stack App which is built by using react,redux,Django-rest-framework,Postgressql,
                ,Aws,Git,Material-UI,Styled-components,React-Router`,
                image: "../img/giphy.gif"
            },
            {
                id: 4,
                title: "Comming Soon Project",
                detail: `Ecommerce Project is Static App which was a about a upcoming Coffe business of my Client.It was based
                on React,StyledComponent,React-Animation,React-router`,
                image: "../img/coming-soon.gif"
            },
            {
                id: 5,
                title: "Budget Project",
                detail: `Budget Project is a Full Stack App which is built by using react,redux,Node,express,MongoBd
                ,Git,Material-UI,Styled-components,React-Router`,
                image: "../img/budget.gif"
            },
            {
                id: 6,
                title: "DevFam Project",
                detail: `DevFam Project is a Full Stack App which is built by using react,redux,Node,express,MongoBd
                ,Heroku,Git,Styled-components,React-bootstrap`,
                image: "../img/devFam.gif"
            },
            {
                id: 7,
                title: "Contact Manager Project",
                detail: `Contact MAnager Project is a Full Stack App which is built by using react,redux,Django-rest,Mongodb
                ,FireStore,GitLab,Material-UI,React-router`,
                image: "../img/contactmanager.gif"
            },
            {
                id: 8,
                title: "React-Django Ecom",
                detail: `React django Ecommerce Project is a Full Stack App which is built by using react,redux,Django-rest,Sqlite3,
                ,Aws,Git,PayPal,Stripe,Styled-components,React-bootstrap`,
                image: "../img/eco.gif"
            },
            {
                id: 9,
                title: "React Events",
                detail: `React Events is App which is built by using react,redux,Node,express,MongoBd
                ,Aws,Git,React-moment,Sematic-UI,Styled-components`,
                image: "../img/events.gif"
            },
            {
                id: 10,
                title: "React Football Project",
                detail: `Football Project is a MERN Stack App which is built by using react,redux,Node,express,MongoBd
                ,Aws,Git,Material-UI,Styled-components,React-router`,
                image: "../img/football.gif"
            },
            {
                id: 11,
                title: "Employee Info",
                detail: `This Project is a Full Stack App which is built by using react,redux,Node,express,MongoBd
                ,Aws,Git,Material-UI,Styled-components,React-router`,
                image: "../img/info.gif"
            },
            {
                id: 12,
                title: "React-django Bank",
                detail: `This Project is a Full Stack App which is built by using react,redux,PostgresSql,Django-rest,
                ,Aws,Git,Styled-components,React-bootstrap.React-router`,
                image: "../img/react-bank.gif"
            },
            {
                id: 13,
                title: "Ecommerce Project",
                detail: `Ecommerce Project is a Full Stack App which is built by using react,redux,Node,express,MongoBd
                ,Aws,Git,PayPal,Stripe,Styled-components,React-bootstrap`,
                image: "../img/ecom.gif"
            },
            {
                id: 14,
                title: "MyRoomBooking",
                detail: `This Project is a Full Stack App which is built by using react,redux,Node,express,MongoBd
                ,Aws,Git,PayPal,Stripe,Material-UI,Styled-components`,
                image: "../img/room booking.gif"
            },
        ]
    }

    ReactProjects = () => (
        this.state.reactProjects.map(proj => {
            return (
                <Project key={proj.id} proj={proj} />
            )

        })
    )

    render() {
        return (


            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row style={{
                    marginTop: "7rem",
                    marginBottom: "1.3rem"
                }}>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">React JS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Python-Rest</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h1 className="text-center mt-5 mb-5"> <span style={{
                                    border: "2px solid grey ",
                                    borderRadius: "5px",
                                    padding: "1rem",
                                    backgroundColor: "white",
                                    fontSize: "42px"
                                }}> React Project</span> </h1>
                                <Row className="mt-2">


                                    {

                                        this.ReactProjects()
                                    }




                                </Row>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h1>Python Projects</h1>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        );
    }

}

export default Projects;