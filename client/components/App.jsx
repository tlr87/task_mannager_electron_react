import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import request from 'superagent'
import Home from './Home'
import Nav from './Nav'
import Task from './Task'
import Help from './Help'
import About from './About'



class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        tasks:[{name:"test"},{name:"test2"}]
      }
  }

  componentDidMount() {
    request.get('http://localhost:3000/v1/tasks')
      .end((err, res) => {
        this.setState({
          tasks: res.body
        })
      })
  }

  render() {
    return (
      <div className="container">
      <Router>
          <div>
            <Nav/>

            <Route exact path='/' render={(props) => <Home tasks={this.state.tasks}/>}/>
            <Route exact path='/Task' component={Task}/>
            <Route exact path='/Help' component={Help}/>
            <Route exact path='/About' component={About}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
