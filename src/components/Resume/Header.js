import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import info from '../../img/info.gif'
import Avt from '../../img//avt.jpg'
export default function Header() {
    return (
        <Container style={{
            backgroundImage: `url(${info})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: "0.7",
            border: "2px solid gray",
            borderRadius: "20px"
        }}>
            <Row>
                <Col lg={4} className="shadow-sm">
                    <div>
                        <img src={Avt} alt="avatar" style={{
                            borderRadius: "50px",

                        }} />
                    </div>
                </Col>
                <Col className="shadow-lg" lg={8}>
                    <h1 className="text-center"
                        style={{
                            color: "green",
                            opacity: "0.7"
                        }}
                    >
                        {/* <i class="fa fa-user"></i> */}
                        <img src="https://img.icons8.com/officel/40/000000/person-male.png" alt=""></img>
                        : Zohaib Younis</h1>
                    <h2 className="text-center" style={{
                        marginLeft: "5.2rem",
                        color: "blue",
                        opacity: "0.7"
                    }}>
                        {/* <i className="fa fa-laptop"></i>
                         */}
                        <img src="https://img.icons8.com/cotton/40/000000/laptop-coding.png" alt="" />
                        : React Developer 3 yrs+</h2>
                    <h3 style={{
                        marginRight: "3rem",
                        color: "brown"
                    }} className="text-center">
                        {/* <i className="fa fa-phone"></i> */}
                        <img src="https://img.icons8.com/color/40/000000/iphone-x.png" alt=""></img>
                        : 0039-3511744832</h3>
                    <h4 className="text-center"
                        style={{

                            color: "grey",

                        }}
                    >
                        {/* <i className="fa fa-envelope"></i> */}
                        <img src="https://img.icons8.com/nolan/40/000000/email.png" alt=""></img>
                        : zabi.jarral08@gmail.com</h4>

                </Col>
            </Row>
        </Container>
    )
}
