import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Ecom from '../../img/ecom.gif'
import Eco from '../../img/eco.gif'
import Porto from '../../img/porto.gif'
import Football from '../../img/football.gif'
import Payment from '../../img/payment.GIF'
export default class ProjectDetail extends React.Component {

    render() {
        const { title, detail, image } = this.props.location.myCustomProps
        return (
            <div className="container-fluid" style={{
                marginTop: "7rem"
            }}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <img src={image} alt="ecommerce" className="img-detail img-fluid" style={{
                                border: "2px solid gray",
                                borderRadius: "20px"
                            }} />
                        </Col>
                        <Col lg={6} style={{
                            border: "2px solid gray",
                            borderRadius: "20px"
                        }}>
                            <div>
                                <h2 className="text-center mt-5" >{title}</h2>
                                <h3 className="text-center" style={
                                    {
                                        color: "white"
                                    }
                                }>Techs: React,Redux,Docker,Node,Express,<br /> MongoDb</h3>
                                <p className="text-lead">Lorem ipsum dolor sit amet,
                                     consectetur adipisicing elit. Quaerat,
                                     dignissimos veritatis debitis totam blanditiis
                                      iste ab molestias ipsa mollitia nostrum, pariatur
                                      voluptatum laboriosam tempora quibusdam ratione temporibus,
                                       iusto eos. Optio, at illum nam facere libero veritatis provident!
                                       Voluptate quisquam, reiciendis
                                    labore animi ipsa hic!
                                     Expedita obcaecati alias quasi sit 0incidunt?
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto
                                      labore ex tenetur cupiditate, nam vitae, assumenda odio hic quos corporis
                                      porro quas exercitationem molestias! Distinctio hic dicta, soluta vel optio
                                       qui quis enim. Quis, eligendi magnam! Tempora perspiciatis quo, exercitationem
                                        officia in fuga aspernatur minima, laudantium veritatis eligendi repudiandae possimus
                                        cupiditate iste odit necessitatibus voluptates nihil. Nulla doloribus quas corrupti
                                        eveniet incidunt, esse dolorum nisi facere excepturi ad nam natus enim? Sit animi ex
                                     , doloremque distinctio exercitationem nemo. Dicta dolore animi modi, ab a quis officia
                                      amet harum numquam, pariatur nostrum rerum nam esse atque similique ipsam libero cupiditate?
                                 </p>
                            </div>
                        </Col>

                    </Row>
                    <Row className="mt-5" style={{
                        marginLeft: "3rem"
                    }}>
                        <Col lg={4}>
                            <Card style={{
                                width: '18rem',
                                border: "2px solid gray",
                                borderRadius: "5px"
                            }}>
                                <Card.Img variant="top" src={Eco}
                                    style={{
                                        height: "200px"
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{
                                width: '18rem',
                                border: "2px solid gray",
                                borderRadius: "5px"
                            }}>
                                <Card.Img variant="top" src={Porto} style={{
                                    height: "200px"
                                }} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={4}>
                            <Card style={{
                                width: '18rem',
                                border: "2px solid gray",
                                borderRadius: "5px"
                            }}>
                                <Card.Img variant="top" src={Payment} style={{
                                    height: "200px"
                                }} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}
