import React from 'react'
import { Row, Col, Toast } from 'react-bootstrap'
export default function Interests() {
    return (
        <div className="mt-5 mb-5" >
            <h1 className="text-center"> <span style={{
                border: "2px solid grey ",
                borderRadius: "5px",
                padding: "1rem",
                backgroundColor: "white",
                fontSize: "42px",

            }}> Interests </span> </h1>
            <Row>
                <Col>
                    <div className="mt-5">
                        <h1 className="text-center " style={{
                            color: "white"
                        }}> These are my hobbies </h1>
                        <Row className="d-flex justify-content-around" style={{
                            color: "black",
                            justifyContent: "center"
                        }}>
                            <Col lg={4} className="text-center" ><Toast>
                                <Toast.Body>Learning new Technologies</Toast.Body>
                            </Toast></Col>
                            <Col lg={4} className="text-center"> <Toast>
                                <Toast.Body>Reading</Toast.Body>
                            </Toast> </Col>
                            <Col lg={4} className="text-center" ><Toast>
                                <Toast.Body> Games</Toast.Body>
                            </Toast></Col>
                        </Row>
                        <Row className="mt-3 d-flex justify-content-around" style={{
                            color: "black",
                            justifyContent: "center"
                        }}>
                            <Col lg={4} className="text-center" ><Toast>
                                <Toast.Body>Travelling</Toast.Body>
                            </Toast></Col>
                            <Col lg={4} className="text-center"> <Toast>
                                <Toast.Body>Badminton</Toast.Body>
                            </Toast> </Col>
                            <Col lg={4} className="text-center" ><Toast>
                                <Toast.Body> Cricket</Toast.Body>
                            </Toast></Col>
                        </Row>

                    </div>



                </Col>
            </Row>
        </div>
    )
}
