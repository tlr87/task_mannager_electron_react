import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

export default class Home extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        tasks:[]
      }
  }

  componentDidMount() {
    this.refreshTasks()
  }

  componentWillReceiveProps() {
    this.refreshTasks()
  }

  refreshTasks() {
    request.get('/v1/tasks')
      .end((err, res) => {
        this.setState({
          tasks: res.body
        })
      })
  }

  render() {
    console.log(this.state);
    return(
      <div className='Home Component'>
        <h2>Please select a task or create a task!</h2>
        <ul>
          <li><Link to={`/Task`} className='Task Home-Task'> Create a task by clicking here.</Link></li>
          {this.state.tasks.map((task, i) =><li key={i}><Link to={`/View/${task.id}`} style={{backgroundColor:task.Colour}} className='Home-Task'><p>{task.id}||<br/>{task.Project_Name}||<br/>{task.Task}||</p></Link></li>)}
        </ul>

      </div>
    )

  }
}
