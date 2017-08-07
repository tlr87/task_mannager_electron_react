import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import request from 'superagent'
import Home from './Home'
import Nav from './Nav'
import Task from './Task'
import Help from './Help'
import About from './About'
import View from './View'


class App extends React.Component {
  render() {
    return (
      <div className="container">
      <Router>
          <div>
            <Nav/>

            <Route exact path='/' component={Home}/>
            <Route exact path='/Task' component={Task}/>
            <Route exact path='/Help' component={Help}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/View/:id' component={View}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
