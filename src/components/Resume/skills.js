import React from 'react';
import { Container, Row, Col, Toast, } from 'react-bootstrap';
import Redux from '../../img/redux.png'
import django from '../../img/django1.png'
import Maven from '../../img/maven.png'
import Scrum from '../../img/scrum.png'
import Agile from '../../img/agile.png'
import TDD from '../../img/tdd.png'
import Firebase from '../../img/firebase.png'
import Html from '../../img/html.jpg'
import Css from '../../img/css.png'

import sass from '../../img/sass.png'
import linux from '../../img/linux.png'
import Ubuntu from '../../img/ubuntu.jpg'
import Express from '../../img/express.jpg'
import Bootstrap from '../../img/bootstrap.jpg'
import material from '../../img/material.png'
import ant from '../../img/ant.png'
import D3 from '../../img/d3.png'
import im from '../../img/im.png'
import ui from '../../img/ui.png'
import ux from '../../img/ux.jpg'
import jest from '../../img/jest.png'
import En from '../../img/enzyme.png'
import mocha from '../../img/mocha.png'
import jasmine from '../../img/jasmine.png'
import Skills1 from '../../img/skills.gif'


export default function Skills() {
    return (
        <div  >
            <h1 className="text-center mt-5 mb-5"><span style={{
                border: "2px solid grey ",
                borderRadius: "5px",
                padding: "1rem",
                backgroundColor: "white",
                fontSize: "42px"
            }}> Skills</span></h1>
            <Container style={{
                backgroundImage: `url(${Skills1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: "0.7",
                border: "2px solid gray",
                borderRadius: "20px"
            }}>
                <Row style={{
                    opacity: "0.7"
                }}>
                    <Col lg={3}>
                        <Toast>

                            <Toast.Body style={{
                                opacity: "0.7"
                            }} className="text-center"><img src="https://img.icons8.com/plasticine/40/000000/react.png" /> React Js</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Redux} width="40px" height="40" />  Redux</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/javascript.png" />  JavaScript</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/python.png" /> Python</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row style={{
                    opacity: "0.7"
                }}>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={django} width="40px" height="40" /> Django rest</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/docker.png" /> Docker</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/git.png" /> Git</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/bubbles/40/000000/github.png" /> Github</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row style={{
                    opacity: "0.7"
                }}>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/nodejs.png" /> Node Js</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/angularjs.png" /> Angular 6</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/java-coffee-cup-logo.png" /> Java</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/spring-logo.png" /> Spring</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row style={{
                    opacity: "0.7"
                }}>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Maven} width="40px" height="40" /> Maven</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/sql.png" /> Sql</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src="https://img.icons8.com/color/40/000000/mongodb.png" /> MongoDB</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Scrum} width="40px" height="40" /> Scrum</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row style={{
                    opacity: "0.7"
                }}>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Agile} width="40px" height="40" /> Agile</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={TDD} width="40px" height="40" /> TDD</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Firebase} width="40px" height="40" /> firebase</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Html} width="40px" height="40" /> Html</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row style={{
                    opacity: "0.7"
                }}>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Css} width="40px" height="40" /> Css</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={sass} width="40px" height="40" /> Sass</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"> <img src={linux} width="40px" height="40" /> Linux</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Ubuntu} width="40px" height="40" /> Ubuntu</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row style={{
                    opacity: "0.7"
                }}>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Express} width="40px" height="40" /> Express</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={Bootstrap} width="40px" height="40" /> bootstrap</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={material} width="40px" height="40" /> Material-UI</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={ant} width="40px" height="40" /> Ant React</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row style={{
                    opacity: "0.7"
                }}>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={D3} width="40px" height="40" /> D3</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={im} width="40px" height="40" /> Immutable.js</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={ui} width="40px" height="40" /> UI</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={ux} width="40px" height="40" /> UX</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row style={{
                    opacity: "0.85"
                }}>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={jest} width="40px" height="40" /> Jest</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={En} width="40px" height="40" /> Enzyme</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={mocha} width="40px" height="40" /> Mocha</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3}>
                        <Toast>
                            <Toast.Body className="text-center"><img src={jasmine} width="40px" height="40" /> Jasmine</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
