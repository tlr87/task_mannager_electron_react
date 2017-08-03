import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Task from './Task'
import Help from './Help'
import About from './About'


const App = () => {
  return (
    <div className="container">
    <Router>
        <div>
          <Nav/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Task' component={Task}/>
          <Route exact path='/Help' component={Help}/>
          <Route exact path='/About' component={About}/>
        </div>
      </Router>
    </div>
  )
}

export default App
