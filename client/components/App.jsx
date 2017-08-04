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
  constructor(props){
      super(props)
      this.state = {
        tasks:[]
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
    console.log(this.state.tasks);
    return (
      <div className="container">
      <Router>
          <div>
            <Nav/>

            <Route exact path='/' render={(props) => <Home tasks={this.state.tasks}/>}/>
            <Route exact path='/Task' component={Task}/>
            <Route exact path='/Help' component={Help}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/View/:id'render={(props)=> <View task={this.state.tasks.find(task => props.match.params.id == task.id)}/>}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
