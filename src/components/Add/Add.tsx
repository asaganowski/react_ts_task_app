import React from 'react'
import {Container, Button,Row} from "react-bootstrap"
import {Link} from "react-router-dom"
import AddCategory from './AddCategory'
import AddProduct from './AddProduct'
import { FiArrowLeft } from "react-icons/fi";


function Add() {
  return (
    <div className='add-wrapper'>

      <Link to="/" className='position-absolute w-100'> <Button variant="outline-secondary"><FiArrowLeft/> Back to Home</Button></Link>
      
      <h2 className='text-center'>Add</h2>
      <Container>
        <Row>
          <div className="col-sm-6">
            <AddCategory />
          </div>
          <div className="col-sm-6">
            <AddProduct />
          </div>
          
        </Row>

      </Container>
    </div>
  )
}

export default Add