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
            Phasellus sed lacus sit amet tortor maximus pulvinar vel a libero. Ut sollicitudin libero euismod sagittis iaculis. Proin mauris risus, vestibulum eu aliquet a, luctus vel risus. Aliquam fringilla ipsum id sapien consequat, non faucibus nibh euismod. Proin dui lectus, rutrum a posuere sodales, tempor id lorem.
          </p>
    </div>
  )
}
