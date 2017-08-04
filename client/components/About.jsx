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
        Phasellus sed lacus sit amet tortor maximus pulvinar vel a libero. Ut sollicitudin libero euismod sagittis iaculis. Proin mauris risus, vestibulum eu aliquet a, luctus vel risus. Aliquam fringilla ipsum id sapien consequat, non faucibus nibh euismod. Proin dui lectus, rutrum a posuere sodales, tempor id lorem.
      </p>
    </div>
  )
}
