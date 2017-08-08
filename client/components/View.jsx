import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'
import { browserHistory } from 'react-router'

export default class View extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        task:{}
      }
  }

  componentDidMount() {
    this.refreshTask()
  }

  componentWillReceiveProps() {
    this.refreshTask()
  }

  refreshTask() {
    request.get('http://localhost:3000/v1/tasks/' + this.props.match.params.id)
      .end((err, res) => {
        this.setState({
          task: res.body
        })
      })
  }
  deleteTask(e) {
    e.preventDefault()

    console.log(this.props)
    console.log('delete' + this.state.task.id)
    request
      .delete('http://localhost:3000/v1/tasks/' + this.state.task.id)
      .end((err, res) => {
        console.log('test')
        this.props.history.push('/')
    })
    //superagent stuff here
  }

  render() {
    const task = this.state.task
    return(
      <div className='View Component'>
        <h2>View your task!</h2>
        <ul>
          <li>
            <span className="view-title">Task id:</span> {task.id}
          </li>
          <li>
            <span className="view-title">Project Name:</span> {task.Project_Name}
          </li>
          <li>
            <span className="view-title">Task:</span> {task.Task}
          </li>
          <li>
            <span className="view-title">Priority:</span> {task.Priority}
          </li>
          <li>
            <span className="view-title">Details:</span> {task.Details}
          </li>
          <li>
            <span className="view-title">Compleated:</span> {task.Compleated}
          </li>
          <li>
          <a className='Button' onClick={this.deleteTask.bind(this)} >Delete Task.</a>
          </li>
      </ul>
        <p>

        </p>
      </div>
    )

  }
}
