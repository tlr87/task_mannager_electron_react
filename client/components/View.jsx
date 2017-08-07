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
        // <Redirect from="/View/:id" to="/" />
        // browserHistory.push('/')
        // this.props.history.go(-1)
        // window.location.href= '/';
        // browserHistory.goBack()

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
            {task.id}
          </li>
          <li>
            {task.Project_Name}
          </li>
          <li>
            {task.Task}
          </li>
          <li>
            {task.Priority}
          </li>
          <li>
            {task.Details}
          </li>
          <li>
            {task.Compleated}
          </li>
        </ul>

        <p>

          <a onClick={this.deleteTask.bind(this)} >Delete button!</a>
        </p>
      </div>
    )

  }
}
