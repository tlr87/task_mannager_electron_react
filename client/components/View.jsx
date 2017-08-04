import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'
import { browserHistory } from 'react-router'

export default function (props){
  function deleteTask(e) {
    e.preventDefault()
    console.log('delete' + props.task.id)
    request
      .delete('http://localhost:3000/v1/tasks/' + props.task.id)
      .end((err, res) => {
        // props.history.push('/')
        // this.props.history.go(-1)
        // window.location.href= '/';
        browserHistory.goBack()

    })
    //superagent stuff here
  }

  const task = props.task || {}

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

        <a onClick={deleteTask} >Delete button!</a>
        </p>
    </div>
  )
}
