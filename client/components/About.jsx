import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import Help from './Help'
import Home from './App'
import Nav from './Nav'

export default function(props) {
  return (
    <div className='About Component'>
      <h2>Welcome to Toms task manager!</h2>
      <p>
        This is a proof of concept!
      </p>
    </div>
  )
}
