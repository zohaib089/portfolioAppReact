import React, { Component } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import Redux from '../img/redux.png'
class Contact extends Component {
    render() {
        return (
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }} >
                <Row style={{
                    marginTop: "7rem",
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
                                }} >More than 20 Project</Card.Title>

                            </Card.Body>
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
                                }} >More than 20 Project</Card.Title>

                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col col={4}>

                        <Card bg="warning" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Warning Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
      </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Contact;