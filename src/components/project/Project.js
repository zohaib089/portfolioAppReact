import React, { Component } from 'react'
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectDetail from './ProjectDetail'

export default class Project extends Component {
    render() {
        const { id, image, title, detail } = this.props.proj;

        // console.log(this.props.proj)
        return (
            <div>
                <Col key={id} lg={4} sm={12} style={{
                    marginTop: "1rem"
                }}>
                    <Card style={{
                        marginTop: "1rem",
                        height: "100%",
                        width: '18rem',
                        border: "2px solid gray",
                        borderRadius: "5px"
                    }}>
                        <Card.Img variant="top" style={{
                            height: "200px"
                        }} src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {detail}
                            </Card.Text>
                            <Button variant="primary"><Link to={
                                {
                                    pathname: `/projects/` + id,
                                    myCustomProps: this.props.proj
                                }
                            } style={{
                                color: "white"
                            }}>
                                Detail
                            </Link> </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div >
        )
    }
}
