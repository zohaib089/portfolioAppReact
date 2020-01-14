import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/landing';
import Courses from './components/Courses';
import Resume from './components/resume';
import Projects from './components/projects';
import ProjectDetail from './components/project/ProjectDetail';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NavBar from './components/Layout';
import MiniFooter from './components/Footer';
import Progress from './components/progressBar/ProgressBar';
import NotFound from './components/NotFound'
class App extends React.Component {
  state = {
    scrollPostion: 0
  }

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  }

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

    this.setState({
      scrollPostion,
    });
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  componentDidMount() {
    this.listenToScrollEvent();
  }

  render() {
    return (
      <div className="App">
        <Progress scroll={this.state.scrollPostion + '%'} />
        <NavBar />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDetail} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route component={NotFound} />
        </Switch>
        <MiniFooter />
      </div>
    );


  }

}

export default App;
