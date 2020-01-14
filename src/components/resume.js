import React, { Component } from 'react'
// import { Grid, Cell } from 'react-mdl'
import { Container } from 'react-bootstrap'
import Header from './Resume/Header';
import Skills from './Resume/skills';
import Experience from './Resume/Experience';
import Education from './Resume/education'
import MyFavProj from './Resume/MyFavProj';
import Expectation from './Resume/Expectations';
import Interests from './Resume/Interests';




class Resume extends Component {
    render() {
        return (
            <Container className="container-fluid"
                style={{
                    marginTop: "6.1rem"
                }}

            >
                <Header />
                <Skills />
                <Experience />
                <Education />
                <MyFavProj />
                <Expectation />
                <Interests />
            </Container>

        )
    }
}

export default Resume;