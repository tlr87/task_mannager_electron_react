import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import Help from './Help'
import Home from './App'
import About from './About'

export default function(props) {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to='/' className='link'>Home</Link>
        </li>
        <li>
          <Link to='/About' className='link'>About</Link>
        </li>
        <li>
          <Link to='/Help' className='link'>Help</Link>
        </li>
        <li>
          Task Mannager!
        </li>
      </ul>
    </div>
  )
}
