import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap";
import ReactMapGL, { Marker } from 'react-map-gl';
// import marker from '../../../Img/marker1.png'

export default class ContactMe extends Component {
    state = {
        viewport: {
            width: "550px",
            height: 540,
            latitude: 45.0671003,
            longitude: 7.6799151,
            zoom: 15
        }
    };
    render() {
        return (
            <div style={{
                marginBottom: "1rem"
            }}>
                <h1 className="text-center mt-5 mb-5"> <span style={{
                    border: "2px solid grey ",
                    borderRadius: "5px",
                    padding: "1rem",
                    backgroundColor: "white",
                    fontSize: "42px"
                }}> Contact Me</span> </h1>
                <Row>
                    <Col lg={6}>
                        <div className="auth-wrapper">
                            <div className="auth-inner" style={{
                                opacity: "0.7",
                                marginRight: "5px"
                            }}>
                                <form>
                                    <h3>Message Me</h3>

                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Name" />
                                    </div>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">

                                        <label>Your Message Here</label>
                                        <textarea style={{
                                            border: "1px solid Light grey",
                                            borderRadius: "5px"
                                        }} rows="4" cols="50" type="text">
                                        </textarea>

                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                    <p className="forgot-password text-right">
                                        Forgot <a href="#">password?</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <ReactMapGL
                                mapboxApiAccessToken='pk.eyJ1Ijoiem9oYWliMDgiLCJhIjoiY2pxbWljYTNiMjJ5MTN5cXNtZWFpb3o2ciJ9.ysDvs8Rn7nGi60KkTR-z6w'
                                {...this.state.viewport}
                                onViewportChange={(viewport) => this.setState({ viewport })}

                            >
                                <Marker latitude={45.0671003} longitude={7.6799151} offsetLeft={-20} offsetTop={-10}>
                                    <div>
                                        <img src="https://img.icons8.com/doodle/35/000000/marker--v5.png" alt="marker" />
                                    </div>

                                </Marker>
                            </ReactMapGL>
                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}
