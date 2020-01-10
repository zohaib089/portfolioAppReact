import React from 'react'
import { Row, Col, Toast, Container, ToastBody } from 'react-bootstrap'
import Reply from '../img/reply.png';
import Aton from '../img/Aton.png';
import Cgm from '../img/cgm.jpg';
import lastMin from '../img/lastminute-pink.gif';
import FreeLance from '../img/freelance.jpg';
import hays from '../img/hasy.png';
export default function MyServices() {
    return (
        <div className="mt-1">
            <h1 className="text-center mt-5 mb-5"> <span style={{
                border: "2px solid grey ",
                borderRadius: "5px",
                padding: "1rem",
                backgroundColor: "white",
                fontSize: "42px"
            }}> My Previous Companies</span> </h1>
            <Container>

                <Row>
                    <Col><div className=" p-3 my-2 rounded">
                        <Toast className="shadow-lg">
                            <ToastBody>
                                <img src={Reply} alt="reply" style={{
                                    width: "auto",
                                    height: "60px",
                                    paddingLeft: "3rem"
                                }} />
                            </ToastBody>
                        </Toast>
                    </div></Col>
                    <Col><div className="p-3 my-2 rounded">
                        <Toast className="shadow-lg">
                            <ToastBody>
                                <img src={Aton} alt="Aton" style={{
                                    width: "300px",
                                    height: "60px",
                                    paddingLeft: "2rem"
                                }} />
                            </ToastBody>
                        </Toast>
                    </div></Col>
                    <Col><div className="p-3 my-2 rounded">
                        <Toast className="shadow-lg">
                            <ToastBody>
                                <img src={Cgm} alt="Cgm" style={{
                                    width: "300px",
                                    height: "60px",
                                    paddingLeft: "1rem"
                                }} />
                            </ToastBody>
                        </Toast>
                    </div></Col>
                </Row>
                <Row>
                    <Col><div className="p-3 my-2 rounded">
                        <Toast className="shadow-lg">
                            <ToastBody>
                                <img src={lastMin} alt="reply" style={{
                                    width: "230px",
                                    height: "60px",
                                    paddingLeft: "1.3rem"
                                }} />
                            </ToastBody>
                        </Toast>
                    </div></Col>
                    <Col><div className="p-3 my-2 rounded">
                        <Toast className="shadow-lg">
                            <ToastBody>
                                <img src={FreeLance} alt="reply" style={{
                                    width: "250px",
                                    height: "60px",
                                    paddingLeft: "3rem"
                                }} />
                            </ToastBody>
                        </Toast>
                    </div></Col>
                    <Col><div className="p-3 my-2 rounded">
                        <Toast className="shadow-lg">
                            <ToastBody>
                                <img src={hays} alt="reply" style={{
                                    width: "auto",
                                    height: "60px",
                                    paddingLeft: "1.3rem"
                                }} />
                            </ToastBody>
                        </Toast>
                    </div></Col>
                </Row>
            </Container>
        </div>

    )
}
