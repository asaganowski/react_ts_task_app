import React,{useEffect, useState} from 'react'
import {AllCategoriesData, createRequest, initCategories, ProductData} from '../helper'
import Select from 'react-select';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { FiArrowLeft } from "react-icons/fi";


function EditProduct() {
    
    let { id } = useParams();
    const [productData,setProductData] = useState<ProductData>()
    const [allCategories,setCategories] = useState<AllCategoriesData>(initCategories)
    
    const navigateTo = useNavigate()


    useEffect(()=>{
      createRequest<ProductData>(`products/groups/${id}`,"GET", null)
        .then((data) => {
          setProductData(data)
        });

      createRequest<AllCategoriesData>(`product_categories`,"GET", null)
        .then((data) => {
          setCategories(data)

        });

          
        },[id])

        const options= allCategories?.data?.map((category)=>({

            value: category.name,
            label: category.name
            
        }))



        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const productName = formData.get("name") as string;
            const productCategory = formData.get("category") as string;

            const category_id:number = allCategories?.data?.filter((category) =>  {return category?.name===productCategory})[0]?.id

            const body:string=JSON.stringify({  'name': productName, 'category_id': category_id,'measure_type': "KILOGRAM", "type": "BASIC", "tax_id": 1})

        
        if(productCategory!==""){
            

          createRequest(`products/${id}`,"PUT", body)
            .then((data) => {
              console.log(data)
            });

            navigateTo("/products")
        }else{
          alert("Please choose a category")
        }

        } 


  return (
    <div className='editProduct-wrapper'>
      <Link to="/products" ><Button variant="outline-secondary" ><FiArrowLeft />Back to Products</Button></Link>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 text-center">
          <h3>Product Name</h3>
          <Form.Control 
              defaultValue={productData?.data?.name}
              className="w-25 mx-auto"
              name="name"
              required
              />
              
        </Form.Group>
        <Form.Group className="mb-3">
          <h3 className='text-center'>Product Category</h3>
          <Select
              options={options}
              className="w-25 mx-auto"
              name="category"
              />
        </Form.Group>
      
        <Button variant="outline-primary" className="text-center" type="submit" >Update</Button>
      </Form>

    
    </div>
  )
}

export default EditProduct