import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import NotFound from './NotFound';
import ProjectDetail from './project/ProjectDetail'
import Login from './auth/Login';
import Register from './auth/Register';




const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/project-detail" component={ProjectDetail} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route component={NotFound} />
        </Switch>
    </div>



)

export default Main;