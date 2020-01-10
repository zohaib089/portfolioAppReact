import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Company from '../../img/comapny.gif'
export default function Experience() {
    return (
        <>
            <h1 className="text-center mt-5 mb-5"> <span style={{
                border: "2px solid grey ",
                borderRadius: "5px",
                padding: "1rem",
                backgroundColor: "white",
                fontSize: "42px"
            }}> Experience</span></h1>
            <Row style={{
                backgroundImage: `url(${Company})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: "0.7",
                border: "2px solid gray",
                borderRadius: "20px"
            }} className="mt-5">
                <Col lg={3}>
                    <div className="mt-5 shadow-sm">
                        <h1 eventKey="first">Free Lancing</h1>
                        <h6>Duration: 2016-2018</h6>
                        <p>Front End Developer</p>
                    </div>

                </Col>
                <Col lg={9}>
                    <div className="shadow-lg" style={{
                        marginLeft: "7rem"
                    }}>
                        <h1>Free Lancer</h1>
                        <p>I have worked on different projects from basic to complex React Redux project</p>
                        <ul>
                            <li>Transforming Psd or Design into Real World React App</li>
                            <li>Writing Reusable components and Code</li>
                            <li>Test based Coding</li>
                            <li>Updating Existing Code</li>
                            <li>Scrum and Agile Methodology</li>
                            <li>Meeting the deadline with 100% result</li>

                        </ul>
                    </div>

                </Col>
                <Col lg={3}>
                    <div className="mt-5 shadow-sm">
                        <h1 eventKey="first">CGM Consulting</h1>
                        <h6>Duration: oct-2018 -> may-2019</h6>
                        <p>React Developer</p>
                    </div>

                </Col>
                <Col lg={9}>
                    <div className="shadow-lg" style={{
                        marginLeft: "7rem"
                    }}>
                        <h1>CGM Consulting</h1>
                        <p>I have worked on different projects from basic to complex React Redux project</p>
                        <ul>
                            <li>Transforming Psd or Design into Real World React App</li>
                            <li>Writing Reusable components and Code</li>
                            <li>Test based Coding</li>
                            <li>Updating Existing Code</li>
                            <li>Scrum and Agile Methodology</li>
                            <li>Meeting the deadline with 100% result</li>

                        </ul>
                    </div>

                </Col>
                <Col lg={3}>
                    <div className="mt-5 shadow-sm">
                        <h1 eventKey="first">Aton Informatica</h1>
                        <h6>Duration: sep 2019-To Present</h6>
                        <p>React Developer</p>

                    </div>

                </Col>
                <Col lg={9}>
                    <div className="shadow-lg" style={{
                        marginLeft: "7rem"
                    }}>
                        <h1>Aton Infromatica</h1>
                        <p>I have worked on different projects from basic to complex React Redux project</p>
                        <ul>
                            <li>Transforming Psd or Design into Real World React App</li>
                            <li>Writing Reusable components and Code</li>
                            <li>Test based Coding</li>
                            <li>Updating Existing Code</li>
                            <li>Scrum and Agile Methodology</li>
                            <li>Meeting the deadline with 100% result</li>

                        </ul>
                    </div>

                </Col>
            </Row>
        </>
    )
}
