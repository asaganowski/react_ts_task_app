import React, {useEffect, useState} from 'react'
import { createRequest, AllCategoriesData, initCategories} from '../helper';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowLeft} from "react-icons/fi";



import {Table} from "react-bootstrap";

function Categories() {


  const [allCategories,setCategories] = useState<AllCategoriesData>(initCategories)

  useEffect(()=>{
    createRequest<AllCategoriesData>(`product_categories`,"GET", null)
          .then((data) => {
            setCategories(data)
          });
  },[])

  

  console.log((allCategories))

  return (
    <div className='categories-wrapper'>
      <Link to='/' className="position-absolute w-100"><Button variant='outline-secondary'><FiArrowLeft/> Back to main page</Button></Link>

      <h2 className='text-center'>Categories</h2>
      <Table striped bordered hover className='text-center mt-100'>
      <thead>
        <tr>
          <th className='col-sm-1'>Category</th>
          <th className='col-sm-1'>Action</th>
        </tr>
      </thead>
      <tbody>
        
          {allCategories?.data?.map((item: any) => {
            return (
              <tr key={item.id}>
                {Object.keys(item).filter(key => key==="name" || key==="group").map((prop:any) =>{
                  return <td key={prop}>{item[prop]}</td>
                }
                )}
                  <td>
                    <Link to={`/editCategory/${item.id}`}><Button variant="warning" >Edit</Button></Link>
                  </td>
              </tr>
            )
          })}
        
       
      </tbody>
    </Table>

      
    </div>
  )
}

export default Categories