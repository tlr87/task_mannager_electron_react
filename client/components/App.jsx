import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Task from './Task'


const App = () => {
  return (
    <div className="container">
      <h1>Task Mannager!</h1>
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/Task' component={Task}/>
        </div>
      </Router>
    </div>
  )
}

export default App
