import React,{useEffect, useState} from 'react'
import {AllCategoriesData, createRequest, CategoryData, initCategories} from '../helper'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { FiArrowLeft } from 'react-icons/fi';



function EditCategory() {
    
    let { id } = useParams();
    const [categoryData,setCategoryData] = useState<CategoryData>()
    const [allCategories, setCategories] = useState<AllCategoriesData>(initCategories)

   
    const navigateTo = useNavigate()

        useEffect(()=>{
            createRequest<CategoryData>(`product_categories/${id}`,"GET", null)
              .then((data) => {
                setCategoryData(data)
              });

            createRequest<AllCategoriesData>(`product_categories`,"GET", null)
              .then((data) => {
                setCategories(data)
              });
            },[id])
           
            
            console.log(allCategories)
            console.log(categoryData)

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
        
            const productCategory = formData.get("category") as string;
        
            const body:string=JSON.stringify({ 'name': productCategory })

            createRequest(`product_categories/${id}`,"PUT", body)
              .then((data) => {
                console.log(data)
              });
            

            navigateTo("/categories")

        
          }
    

  return (
    <div className='editCategory-wrapper'>
      <Link to="/categories" className='position-absolute w-100'> <Button variant="outline-secondary"><FiArrowLeft />Back to Categories</Button></Link>

        <Form className='text-center mx-auto' onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <h2>Category</h2>
        <Form.Control
          name="category" 
          defaultValue={categoryData?.data?.name}
          className="w-25 mx-auto"
          required
            />
      </Form.Group>

      
      <Button variant="outline-primary" type="submit" >Update</Button>
    </Form>

    </div>
  )
}

export default EditCategory