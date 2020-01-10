import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import CompanyManagement from '../../img/companyManagement.gif'
export default function MyFavProj() {
    return (
        <div className="container-fluid">
            <div>
                <h1 className="text-center mt-5 mb-5"> <span style={{
                    border: "2px solid grey ",
                    borderRadius: "5px",
                    padding: "1rem",
                    backgroundColor: "white",
                    fontSize: "42px"

                }}> My Fav Project </span> </h1>
            </div>

            <Row>
                <Col lg={6}>
                    <img src={CompanyManagement} alt="CompanyManagementImg" className="img-fluid" style={{
                        height: "80vh",
                        border: "2px solid gray",
                        borderRadius: "20px"
                    }} />
                </Col>
                <Col style={{
                    border: "2px solid gray",
                    borderRadius: "20px"
                }} lg={6}>

                    <h2 className="text-center" style={{
                        color: "White"
                    }}>Company Management System</h2>
                    <h3 style={{
                        color: "white"
                    }} className="text-center">Tech Used: React,Redux,Python-Django-Rest,D3,Docker,Git,Scss,Styled Components</h3>
                    <ListGroup>

                        <ListGroup.Item variant="primary">Handling Employees Data</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Managing Vehicles going in out</ListGroup.Item>
                        <ListGroup.Item variant="success">Handling All daily Meeting</ListGroup.Item>
                        <ListGroup.Item variant="danger">Sending detail emails to CEO</ListGroup.Item>
                        <ListGroup.Item variant="warning">Performing Statistics</ListGroup.Item>
                        <ListGroup.Item variant="info">Showing Monthly
                        Data in Graphs </ListGroup.Item>
                        <ListGroup.Item variant="light">Analyse Loss and Profit</ListGroup.Item>
                        <ListGroup.Item variant="dark">Adding new Components on Daily basis</ListGroup.Item>
                    </ListGroup>

                </Col>
            </Row>
        </div>
    )
}
