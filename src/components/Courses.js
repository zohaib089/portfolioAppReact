import React, { Component } from 'react'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'
import Redux from '../img/redux.png'
import Node from '../img/Node.png'
import Mongo from '../img/mongo.png'
import JS from '../img/JS.jpg'
import HTML from '../img/html.jpg'
class Contact extends Component {
    render() {
        return (
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }} >
                <Row style={{

                    marginLeft: "6rem",
                }}>
                    <Col lg={4} >

                        <Card bg="success" text="white" style={{ width: '18rem' }}>

                            <div>
                                <img style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "block",
                                    marginTop: "5px"
                                }} src="https://img.icons8.com/cute-clipart/124/000000/react-native.png" className="img-fluid" />
                            </div>
                            <Card.Body>

                                <Card.Title className="text-center" style={{
                                    fontSize: "42px"
                                }} >React Course</Card.Title>

                            </Card.Body>
                            <Button > Start Learning</Button>
                        </Card>
                        <br />



                    </Col>
                    <Col col={4}>
                        <Card bg="danger" text="white" style={{ width: '18rem' }}>
                            <div>
                                <img style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "block",
                                    marginTop: "5px",
                                    height: "124px",
                                    width: "124px"
                                }} src={Redux} className="img-fluid" />
                            </div>
                            <Card.Body>

                                <Card.Title className="text-center" style={{
                                    fontSize: "42px"
                                }} >Redux Course</Card.Title>

                            </Card.Body>
                            <Button > Start Learning</Button>
                        </Card>
                        <br />
                    </Col>
                    <Col col={4}>

                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <div>
                                <img style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "block",
                                    marginTop: "5px",
                                    height: "124px",
                                    width: "124px"
                                }} src={Node} className="img-fluid" />
                            </div>
                            <Card.Body>

                                <Card.Title className="text-center" style={{
                                    fontSize: "42px"
                                }} >Node Course</Card.Title>

                            </Card.Body>
                            <Button > Start Learning</Button>
                        </Card>
                        <br />
                    </Col>
                </Row>
                <Row style={{

                    marginLeft: "6rem",
                }}>
                    <Col lg={4} >

                        <Card bg="success" text="white" style={{ width: '18rem' }}>

                            <div>
                                <img style={{

                                    width: "100%",
                                    height: "160px"

                                }} src={Mongo} className="img-fluid" />
                            </div>
                            <Card.Body>

                                <Card.Title className="text-center" style={{
                                    fontSize: "42px"
                                }} >Mongo DB Course</Card.Title>

                            </Card.Body>
                            <Button > Start Learning</Button>
                        </Card>
                        <br />



                    </Col>
                    <Col col={4}>
                        <Card bg="danger" text="white" style={{ width: '18rem' }}>
                            <div>
                                <img style={{
                                    width: "100%",
                                    height: "160px"
                                }} src={JS} className="img-fluid" />
                            </div>
                            <Card.Body>

                                <Card.Title className="text-center" style={{
                                    fontSize: "42px"
                                }} >JavaScript Course</Card.Title>

                            </Card.Body>
                            <Button > Start Learning</Button>
                        </Card>
                        <br />
                    </Col>
                    <Col col={4}>

                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <div>
                                <img style={{
                                    width: "100%",
                                    height: "160px"
                                }} src={HTML} className="img-fluid" />
                            </div>
                            <Card.Body>

                                <Card.Title className="text-center" style={{
                                    fontSize: "42px"
                                }} >Node Course</Card.Title>

                            </Card.Body>
                            <Button > Start Learning</Button>
                        </Card>
                        <br />
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Contact;