import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo from '../img/logo.png';
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 50s linear infinite;
  font-size: .8rem;
`;
export default function MiniFooter() {
    return (

        <Row className="container-fluid" style={{
            background: "white",
            width: "100vw"
        }}>

            <Col lg={8}>
                &copy; 2019-2021 Company, Inc.
          </Col>
            <Col lg={4}>
                <div style={{
                    float: 'right'
                }}>
                    <h1>Zohaib Portfolio</h1>
                </div>

            </Col>
        </Row>

    )
}
