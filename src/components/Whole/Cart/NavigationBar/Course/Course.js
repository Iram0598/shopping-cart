import React from 'react'
import "./Course.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

const Course = (props) => {
  
  return (
    <div className='course'>
      <div>
      <img src={props.course.image} alt="img"></img>
      </div>
      <div>
      <h3>Course title: <span className='course-name'>{props.course.name}</span> </h3>
       <p>Instructor: <b>{props.course.instructor}</b> </p>
       <p>Price: {props.course.price}</p>
       <Button variant="warning" onClick={ ()=> (props.handleButton(props.course))}><FontAwesomeIcon icon={faShoppingCart} />Enroll now</Button>
      </div>
       
    </div>
  )
}

export default Course
