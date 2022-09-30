import React, {useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import Select from 'react-select';
import {AllCategoriesData, createRequest, initCategories} from "../helper"


function AddProduct() {

  const navigateTo = useNavigate()
  const [allCategories,setCategories] = useState<AllCategoriesData>(initCategories)


  useEffect(()=>{
    createRequest<AllCategoriesData>(`product_categories`,"GET", null)
      .then((data) => {
        setCategories(data)
      });
    },[])


    console.log(allCategories)
const options= allCategories?.data?.map((cat:any)=>({

    value: cat?.name,
    label: cat?.name
    
}))


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const productName = formData.get("name") as string;
    const category = formData.get("category") as string;

    const category_id:number = allCategories?.data?.filter((cat:any) =>  {return cat?.name===category})[0]?.id

    const body:string=JSON.stringify({ "name": productName, "type":"BASIC", 'category_id': category_id, "measure_type": "KILOGRAM", "tax_id": 1 })

    if(category!==""){
    
      createRequest(`products`,"POST", body)
      .then((data) => {
        console.log(data)
      });

      navigateTo("/products")
    }else{
      alert("Please choose a category")
    }

  
  };



  return (
    <div className='w-100 addProduct-wrapper'>
      
      
      <h3 className='text-center'>new Product</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          
          <Form.Control 
            className='w-50 mx-auto'
            placeholder="Enter name of product" 
            name="name"
            required
              />
        </Form.Group>

        <Form.Group className="mb-3">
          
        <Select
            
            options={options}
            className="w-50 mx-auto text-left"
            name="category"
            placeholder="Choose a category"
            />
        </Form.Group>

        
        <Button type="submit" variant='outline-primary'>Save</Button>
      </Form>


    </div>
  )
}

export default AddProduct