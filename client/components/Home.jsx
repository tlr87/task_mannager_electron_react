import React from 'react'
import {Link} from 'react-router-dom'

export default function (props){
  return(
    <div className='Home Component'>

        <h2>Please select a task or create a task!</h2>
        <Link to={`/Task`} className='Task Home-Task'> Create a task by clicking here.</Link>
    </div>
  )
}
