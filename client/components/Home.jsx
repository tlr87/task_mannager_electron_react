import React from 'react'
import {Link} from 'react-router-dom'

export default function (props){
  return(
    <div className='Home'>
        <h2>Please select a task or create a task!</h2>
        <Link to={`/Task`} className='Task'> Create a task by clicking here.</Link>
    </div>
  )
}
