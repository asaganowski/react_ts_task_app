import React from 'react'
import { Button,  Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import {createRequest} from "../helper"


function AddCategory() {

  const navigateTo = useNavigate()


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const categoryName = formData.get("categoryName") as string;

    const body:string=JSON.stringify({ "name": categoryName})

    
    createRequest(`product_categories`,"POST", body)
      .then((data) => {
        console.log(data)
      });

    navigateTo("/categories")

}


  return (
    <div className='w-100 addCategory-wrapper text-center'>
      
      <h3 >new Category</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3">
          
          <Form.Control 
            className='w-50 mx-auto'
            placeholder="Enter new category" 
            name="categoryName"
            required
              />
        </Form.Group>

        
        <Button type="submit" variant='outline-primary'>Save</Button>
      </Form>
      
    </div>
  )
}

export default AddCategory