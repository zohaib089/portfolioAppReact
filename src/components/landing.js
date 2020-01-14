import React, { Component } from 'react'
import { Row, Col, ProgressBar, Toast } from 'react-bootstrap';
import Avt from '../img/avt.jpg'
import Typed from 'react-typed';
import styled from 'styled-components'
import Gifi from '../img/1.GIF'
import ReactGif from '../img/react.gif'
import pyGif from '../img/python.gif'
import djangoRest from '../img/django-rest.gif'
import MyFavPro from './MyFavPro'
import MyServices from './MyServices';
import ContactMe from "./ContactMe";
import Angular8 from '../img/Angular.gif'
import Vue from '../img/vue.gif'

export default class landing extends Component {

    render() {
        return (
            <>
                <Row className="landing-grid" style={{
                    paddingTop: "0",
                    width: '100%',
                }}>

                    <Col className="colLeft1" lg={3}>
                        <ProductWrapper>
                            <div className="colLeft">
                                <img src={Avt} alt="avatar" className="avatar-img" style={{
                                    height: "150px",
                                    borderRadius: "50px",

                                    opacity: "0.7",
                                    marginBottom: "5px"
                                }} />
                                <Toast>
                                    <Toast.Body>
                                        <h3
                                            className="heading"
                                            style={{
                                                fontFamily: "Konop",
                                                fontStyle: "bold",
                                                fontWeight: "400",
                                                color: "Black",
                                                float: "center",
                                                marginTop: ".5rem",


                                            }}>Zohaib Younis</h3>
                                    </Toast.Body>
                                </Toast>
                                <Toast>
                                    <Toast.Body>
                                        <h4
                                            className="heading"
                                            style={{
                                                fontFamily: "Konop",
                                                fontStyle: "bold",
                                                fontWeight: "400",
                                                color: "Black",
                                                float: "center",
                                                marginTop: ".5rem",

                                            }}>
                                            React Developer
                            </h4>
                                    </Toast.Body>
                                </Toast>
                                <Toast>
                                    <Toast.Body>
                                        <h5
                                            className="heading"
                                            style={{
                                                fontFamily: "Konop",
                                                fontStyle: "bold",
                                                fontWeight: "400",
                                                color: "Black",
                                                float: "center",
                                                marginTop: ".5rem",

                                            }}>
                                            (0039)-3511744832
                            </h5>
                                    </Toast.Body>
                                </Toast>
                                <Toast>
                                    <Toast.Body>
                                        <h6
                                            className="heading"
                                            style={{
                                                fontFamily: "Konop",
                                                fontStyle: "bold",
                                                fontWeight: "400",
                                                color: "Black",
                                                float: "center",
                                                marginTop: ".5rem",

                                            }}>
                                            Turin Italy
                            </h6>
                                    </Toast.Body>
                                </Toast>

                                <Toast>
                                    <Toast.Body>
                                        <h3
                                            className="heading"
                                            style={{
                                                fontFamily: "Konop",
                                                fontStyle: "bold",
                                                fontWeight: "400",
                                                color: "Black",
                                                float: "center",
                                                marginTop: ".5rem",

                                            }} >
                                            My Skills
                            </h3>
                                    </Toast.Body>
                                </Toast>
                                <Toast>

                                    <h4>React Js</h4>
                                    <hr />
                                    <Toast.Body>
                                        <h6
                                            className="heading"
                                            style={{
                                                fontFamily: "Konop",
                                                fontStyle: "bold",
                                                fontWeight: "400",
                                                color: "Black",
                                                float: "center",
                                                marginTop: ".5rem",

                                            }}>
                                            <ProgressBar animated striped variant="success" now={85} />
                                        </h6>
                                    </Toast.Body>
                                </Toast>
                                <Toast>

                                    <h4>Javascript</h4>
                                    <hr />
                                    <Toast.Body>
                                        <h6
                                            className="heading"
                                            style={{
                                                fontFamily: "Konop",
                                                fontStyle: "bold",
                                                fontWeight: "400",
                                                color: "Black",
                                                float: "center",
                                                marginTop: ".5rem",

                                            }}>
                                            <ProgressBar animated striped variant="success" now={80} />
                                        </h6>
                                    </Toast.Body>
                                </Toast>
                                <Toast>

                                    <h4>Python</h4>
                                    <hr />
                                    <Toast.Body>
                                        <h6
                                            className="heading"
                                            style={{
                                                fontFamily: "Konop",
                                                fontStyle: "bold",
                                                fontWeight: "400",
                                                color: "Black",
                                                float: "center",
                                                marginTop: ".5rem",

                                            }}>
                                            <ProgressBar animated striped variant="success" now={70} />
                                        </h6>
                                    </Toast.Body>
                                </Toast>


                            </div>
                        </ProductWrapper>
                    </Col>

                    <Col lg={7}><ProductWrapper>
                        <div className="banner-text colLeft" style={{

                            width: "70vw",

                        }}>
                            {/* <h1>Full Stack Web Developer</h1> */}
                            <div>
                                <h1>
                                    <Typed
                                        strings={['Full Stack Web Developer']}
                                        typeSpeed={40}
                                        backSpeed={80}
                                        loop
                                    />
                                </h1>

                            </div>

                            <hr />

                            <p>
                                <Typed
                                    strings={['HTML / CSS | Bootstrap | Javascript | React | NodeJs | Express | MonogoDB | Python']}
                                    typeSpeed={10
                                    }
                                    backSpeed={80}
                                    loop
                                />
                            </p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://linkedin.com/in/zohaib-younis-5aa8ba66/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" style={{
                                        color: "#0e76a8"
                                    }} />
                                </a>
                                {/* Twitter */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" style={{
                                        color: "#38A1F3"
                                    }} aria-hidden="true" />
                                </a>
                                {/* Stackoverflow */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-stack-overflow" style={{
                                        color: "#f48024"
                                    }} aria-hidden="true" />
                                </a>
                            </div>

                        </div></ProductWrapper>
                        <div style={{
                            width: "70vw",
                            opacity: "0.7",
                            marginLeft: "8px",
                            marginTop: "5px"

                        }}>
                            <img style={{
                                width: "100%",
                                borderRadius: "5px"
                            }} src={Gifi} alt="Giffi" />
                        </div>
                    </Col>



                </Row>


                <h1 className="text-center mt-5 mb-5"> <span style={{
                    border: "2px solid grey ",
                    borderRadius: "5px",
                    padding: "1rem",
                    backgroundColor: "white",
                    fontSize: "42px"
                }}> My Fav Techs</span> </h1>

                <Row className="mt-2">

                    <Col className=" ml-5" lg={5}>
                        <div>
                            <img className="img-fluid" src={ReactGif} style={{
                                opacity: "0.8",
                                border: "2px solid gray",
                                borderRadius: "20px"
                            }} alt="Gifffiiii" />
                        </div>

                    </Col>
                    <Col className="shadow-lg" lg={6} style={{
                        border: "2px solid gray",
                        borderRadius: "20px"
                    }}>
                        <div>
                            <h2 className="text-center mt-5">REACT Js</h2>
                            <h3 className="text-center">Invented By Facebook Is a powerFul Framework</h3>
                            <p className="text-lead">Declarative
                                                React makes it painless to create interactive UIs. Design simple views
                                                for each state in your application, and React will efficiently update and
                                                render just the right components when your data changes.

                                                Declarative views make your code more predictable and easier to debug.<br />
                                Build encapsulated components that manage their own state,
                                then compose them to make complex UIs.


                                Since component logic is written in J
                                avaScript instead of templates, you can easily
                                pass rich data through your app and keep state out of the DOM.
                                                <br />
                                We don’t make assumptions about the rest of your technology stack,
                                so you can develop new features in React without rewriting existing code.

                                React can also render on the server using
                                Node and power mobile apps using React Native.
                                                <br />
                                React components implement a render() method
                                that takes input data and returns what to display.
                                This example uses an XML-like syntax called JSX.
                                Input data that is passed into the component can be accessed
                                by render() via this.props.
                                 </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-2">


                    <Col className="ml-5 shadow-lg" lg={5} style={{
                        border: "2px solid gray",
                        borderRadius: "20px"
                    }}>
                        <div>
                            <h2 className="text-center mt-5">ANGULAR Js</h2>
                            <h3 className="text-center">Invented By Facebook Is a powerFul Framework</h3>
                            <p className="text-lead">Declarative
                                                React makes it painless to create interactive UIs. Design simple views
                                                for each state in your application, and React will efficiently update and
                                                render just the right components when your data changes.

                                                Declarative views make your code more predictable and easier to debug.<br />
                                Build encapsulated components that manage their own state,
                                then compose them to make complex UIs.


                                Since component logic is written in J
                                avaScript instead of templates, you can easily
                                pass rich data through your app and keep state out of the DOM.
                                                <br />
                                We don’t make assumptions about the rest of your technology stack,
                                so you can develop new features in React without rewriting existing code.

                                React can also render on the server using
                                Node and power mobile apps using React Native.
                                                <br />
                                React components implement a render() method
                                that takes input data and returns what to display.
                                This example uses an XML-like syntax called JSX.
                                Input data that is passed into the component can be accessed
                                by render() via this.props.
                                 </p>
                        </div>
                    </Col>
                    <Col className=" ml-2" lg={6}>
                        <div>
                            <img className="img-fluid" src={Angular8} style={{
                                opacity: "0.8",
                                border: "2px solid gray",
                                borderRadius: "20px",
                                height: "570px",

                            }} alt="Gifffiiii" />
                        </div>

                    </Col>
                </Row>
                <Row className="mt-2">

                    <Col className=" ml-5" lg={5}>
                        <div>
                            <img className="img-fluid" src={Vue} style={{
                                opacity: "0.8",
                                border: "2px solid gray",
                                borderRadius: "20px",
                                height: "470px"
                            }} alt="Gifffiiii" />
                        </div>

                    </Col>
                    <Col className="shadow-lg" lg={6} style={{
                        border: "2px solid gray",
                        borderRadius: "20px"
                    }}>
                        <div>
                            <h2 className="text-center mt-5">VUE Js</h2>
                            <h3 className="text-center">Invented By Facebook Is a powerFul Framework</h3>
                            <p className="text-lead">Declarative
                                                React makes it painless to create interactive UIs. Design simple views
                                                for each state in your application, and React will efficiently update and
                                                render just the right components when your data changes.

                                                Declarative views make your code more predictable and easier to debug.<br />
                                Build encapsulated components that manage their own state,
                                then compose them to make complex UIs.


                                Since component logic is written in J
                                avaScript instead of templates, you can easily
                                pass rich data through your app and keep state out of the DOM.
                                                <br />
                                We don’t make assumptions about the rest of your technology stack,
                                so you can develop new features in React without rewriting existing code.

                                React can also render on the server using
                                Node and power mobile apps using React Native.
                                                <br />
                                React components implement a render() method
                                that takes input data and returns what to display.
                                This example uses an XML-like syntax called JSX.
                                Input data that is passed into the component can be accessed
                                by render() via this.props.
                                 </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-2">


                    <Col lg={5} className="shadow-lg ml-5" style={{
                        border: "2px solid gray",
                        borderRadius: "20px"
                    }}>
                        <div>
                            <h2 className="text-center mt-5">Python</h2>
                            <h3 className="text-center">Simplest Lang developed in ND</h3>
                            <p className="text-lead">Python is an interpreted, high-level, general-purpose programming language.
                            Created by Guido van Rossum and first released in 1991,
                            Python's design philosophy emphasizes code readability with its notable use of significant whitespace.
                            Its language constructs and object-oriented approach aim to help programmers write clear,
                             logical code for small and large-scale projects.

                                Python is dynamically typed and garbage-collected.
                                It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
                                Python is often described as a "batteries included" language due to its comprehensive standard library.

                                Python was conceived in the late 1980s as a successor to the ABC language.
                                Python 2.0, released in 2000, introduced features like list comprehensions and
                                a garbage collection system capable of collecting reference cycles.
                                Python 3.0, released in 2008, was a major revision of the language
                                 that is not completely backward-compatible,
                                and much Python 2 code does not run unmodified on Python 3.
                                 </p>
                        </div>
                    </Col>
                    <Col className="mr-5" style={{
                        marginTop: "3.5rem"
                    }} lg={6}>
                        <div >
                            <img className="img-fluid" src={pyGif} style={{
                                opacity: "0.8",
                                border: "2px solid gray",
                                borderRadius: "20px"
                            }} alt="Gifffiiii" />
                        </div>

                    </Col>
                </Row>

                <Row className="mt-2">

                    <Col className="mt-3 ml-5" lg={5}>
                        <div className="">
                            <img style={{
                                height: "100%",
                                opacity: "0.8",
                                border: "2px solid gray",
                                borderRadius: "20px"

                            }} className="img-fluid" src={djangoRest} alt="Gifffiiii" />
                        </div>

                    </Col>
                    <Col className="shadow-lg" lg={6} style={{
                        border: "2px solid gray",
                        borderRadius: "20px"
                    }}>
                        <div>
                            <h2 className="text-center mt-5">Django Rest Framework</h2>
                            <h3 className="text-center">Most Popular framework of Python</h3>
                            <p className="text-lead">Django REST framework is a powerful and flexible toolkit for building Web APIs.

Some reasons you might want to use REST framework:

The Web browsable API is a huge usability win for your developers.
Authentication policies including packages for OAuth1a and OAuth2.
Serialization that supports both ORM and non-ORM data sources.
Customizable all the way down - just use regular function-based views if you don't need the more powerful features.
Extensive documentation, and great community support.
Used and trusted by internationally recognised companies including Mozilla, Red Hat, Heroku, and Eventbrite.
REST framework is a collaboratively funded project. If you use REST framework commercially we strongly encourage you to invest in its continued development by signing up for a paid plan.

Every single sign-up helps us make REST framework long-term financially sustainable.
A REST API should spend almost all of its descriptive effort in defining the media type(s) used for representing resources and driving application state.

— Roy Fielding, REST APIs must be hypertext driven

REST framework provides built-in support for generating OpenAPI schemas, which can be used with tools that allow you to build API documentation.
                                 </p>
                        </div>
                    </Col>
                </Row>

                <MyFavPro />
                <MyServices />
                <ContactMe />
            </>
            // </div>

        )
    }
}


const ProductWrapper = styled.div`

.colLeft{
    margin-left:.5rem
width:'100%'
}
  &:hover {
    .colLeft {
       background:#1A508A;
       transition: all 1s ease-in-out;
       border-radius:5px;
       color:#2D6E95 !important;
      border: 0.04rem solid #2D6E95 !important;
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
   .heading{
        color:#2D6E95 !important;
    }

  
  }

 
 
  
 
`;

