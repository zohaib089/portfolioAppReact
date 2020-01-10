import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Redux from '../../img/redux.png'
import TS from '../../img/ts.png'
export default function Expectations() {
    return (
        <div>
            <h1 className="mb-5 mt-5 text-center"> <span style={{
                border: "2px solid grey ",
                borderRadius: "5px",
                padding: "1rem",
                backgroundColor: "white",
                fontSize: "42px"
            }}> What you can Expect from me </span></h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#008C45', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    // date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src=" https://img.icons8.com/plasticine/40/000000/react.png" style={{
                        marginLeft: ".6rem",
                        marginTop: ".7rem"
                    }} />}
                >
                    <h3 className="vertical-timeline-element-title">React Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">with Front End Techs</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2010 - 2011"
                    contentStyle={{ background: '#F4F5F0', color: '#111' }}
                    iconStyle={{ background: '#F4F5F0', color: '#fff' }}
                    icon={<img src={Redux} width="40" height="40" alt="reduxImg" style={{
                        marginLeft: ".6rem",
                        marginTop: ".7rem"
                    }} />}>

                    <h3 className="vertical-timeline-element-title">Redux</h3>
                    <h4 className="vertical-timeline-element-subtitle">Handling App States</h4>
                    <p>
                        I can use Redux on React based Project to handle States of the App.Managing your App won't be that much of difficulty
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2008 - 2010"
                    contentStyle={{ background: '#CD212A', color: '#fff' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src=" https://img.icons8.com/color/40/000000/javascript.png" style={{
                        marginLeft: ".6rem",
                        marginTop: ".7rem"
                    }} />}
                >
                    <h3 className="vertical-timeline-element-title">JavaScript</h3>
                    <h4 className="vertical-timeline-element-subtitle">Javascript with React</h4>
                    <p>
                        User Experience, Visual Design
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2006 - 2008"
                    contentStyle={{ background: '#008C45', color: '#fff' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src=" https://img.icons8.com/color/40/000000/python.png" style={{
                        marginLeft: ".6rem",
                        marginTop: ".7rem"
                    }} />}
                >
                    <h3 className="vertical-timeline-element-title">Python</h3>
                    <h4 className="vertical-timeline-element-subtitle">Python django rest With React</h4>
                    <p>
                        Can create Rest API using django-rest-framework,Postgressql,Docker and built Front end WebApp on top of that
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<img src=" https://img.icons8.com/color/40/000000/react-native.png" style={{
                        marginLeft: ".6rem",
                        marginTop: ".7rem"
                    }} />}
                >
                    <h3 className="vertical-timeline-element-title">React Native</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mobile Development</h4>
                    <p>
                        Using React Native I can convert any design to Live App.Try me
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="November 2012"
                    contentStyle={{ background: '#CD212A', color: '#fff' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<img src={TS} height="40" width="40" style={{
                        marginLeft: ".6rem",
                        marginTop: ".7rem"
                    }} />}
                >
                    <h3 className="vertical-timeline-element-title">TypeScript</h3>
                    <h4 className="vertical-timeline-element-subtitle">If you want to secure your app TypeScript is here</h4>
                    <p>
                        Creative Design, Secured App, Web Security
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    // date="2002 - 2006"
                    contentStyle={{ background: '#008C45', color: '#fff' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<img src=" https://img.icons8.com/dusk/40/000000/java-coffee-cup-logo.png" style={{
                        marginLeft: ".6rem",
                        marginTop: ".7rem"
                    }} />}
                >
                    <h3 className="vertical-timeline-element-title">Basic Knowledge of Java</h3>
                    <h4 className="vertical-timeline-element-subtitle">Java Developer</h4>
                    <p>
                        Looking for Junior java Developer I am here can speed up to learn things related to your projects.
    </p>
                </VerticalTimelineElement>
            </VerticalTimeline >
        </div >
    )
}
