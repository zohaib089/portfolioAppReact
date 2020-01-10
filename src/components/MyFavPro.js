import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import porto from '../img/porto.gif';
import ecom from '../img/ecom.gif';
import mangement from '../img/giphy.gif'


export default function MyFavPro() {
    return (
        <div className=" container-fluid">
            <h1 className="text-center mt-5 mb-5"> <span style={{
                border: "2px solid grey ",
                borderRadius: "5px",
                padding: "1rem",
                backgroundColor: "white",
                fontSize: "42px"
            }}> Top 3 Projects</span> </h1>
            <Row style={{
                marginLeft: "6rem",
                marginTop: "2rem"
            }}>
                <Col lg={4}>
                    <Card className="shadow-lg" style={{
                        width: '18rem',

                        border: "2px solid gray",
                        borderRadius: "5px"


                    }}>
                        <Card.Img variant="top" src={ecom} className="img-fluid" />
                        <Card.Body>
                            <Card.Title>E-commerce React App</Card.Title>
                            <Card.Text>
                                This project was build on top of React,Redux which is a Full Stack Project.
                                It was a Complete project with implement of Stripe and PayPal payment Integration
                         </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>React,Redux,Styled Components,React-animation,LazyLoading</ListGroupItem>
                            <ListGroupItem>Nodejs,Express,MongoDb</ListGroupItem>
                            <ListGroupItem>GitLab,Aws,Scrum,Enzyme</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="shadow-lg" style={{
                        width: '18rem',
                        border: "2px solid gray",
                        borderRadius: "5px"
                    }}>
                        <Card.Img variant="top" src={porto} className="img-fluid" />
                        <Card.Body>
                            <Card.Title>Portfolio App React</Card.Title>
                            <Card.Text>
                                This is my personal project which is you visiting right now at the moment.
                                It is Static website to show my skills to Recruiters who are looking new and creative Talent
    </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>React,React-animation</ListGroupItem>
                            <ListGroupItem>Style components,React-Bootstrap</ListGroupItem>
                            <ListGroupItem>React-timeline , React carousel,React-Router</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="shadow-lg" style={{
                        width: '18rem',
                        border: "2px solid gray",
                        borderRadius: "5px"
                    }}>
                        <Card.Img variant="top" src={mangement} className="img-fluid" />
                        <Card.Body>
                            <Card.Title>Data Managing React</Card.Title>
                            <Card.Text>
                                This Project i have marked as my Favorite Project which i built on
                                 my own for a Company to ease the Process of handling Complex data
    </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>React,Redux,Material-UI,Styled-components</ListGroupItem>
                            <ListGroupItem>Python,Python-django-rest,PostgresSql</ListGroupItem>
                            <ListGroupItem>Gitlab,AWS,CI/CD,Mocha</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
