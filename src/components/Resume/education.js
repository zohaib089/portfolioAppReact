import React from 'react'
import { Row, Col } from 'react-bootstrap'
import eduImg from '../../img/education.gif'

export default function Education() {
    return (
        <>
            <h1 className="text-center mt-5 mb-5"> <span style={{
                border: "2px solid grey ",
                borderRadius: "5px",
                padding: "1rem",
                backgroundColor: "white",
                fontSize: "42px"
            }}> Education</span> </h1>
            <Row style={{
                backgroundImage: `url(${eduImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: "0.7",
                transition: "linear 2s",
                border: "2px solid gray",
                borderRadius: "20px"
            }}>

                <Col lg={3}> <div className="shadow-sm mt-3">
                    <h1 eventKey="first">Bachelor in Computer System Engineering</h1>

                </div></Col>
                <Col lg={9}> <div className="shadow-lg" style={{
                    marginLeft: "7rem"
                }}>
                    <h1>Mirpur University of Science and Technology</h1>
                    <ul>
                        <li>BsCSE</li>
                        <li>2008-2012</li>
                        <li>Software specialization</li>
                        <li>Object oriented Programming</li>
                        <li>DataBases</li>
                        <li>Web Development and Mobile Development</li>
                        <li>Thesis: Automated Toll Tax Collection</li>

                    </ul>
                </div></Col>
            </Row>
        </>
    )
}
