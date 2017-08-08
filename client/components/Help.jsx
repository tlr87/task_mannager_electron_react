import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './App'
import About from './About'
import Nav from './Nav'


export default function (props){
  return(
    <div className='Help Component'>
        <h2>Help section</h2>
          <p>
            Click on a task in the color boxes. Or create a task!
          </p>
    </div>
  )
}
