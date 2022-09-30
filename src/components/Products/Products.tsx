import React, {useEffect, useState} from 'react'
import { AllProductsSS, createRequest, initProductsSS } from '../helper';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import {Table} from "react-bootstrap";

function Products() {


  const [allProducts,setProducts] = useState<AllProductsSS>(initProductsSS)

    useEffect(()=>{
      createRequest<AllProductsSS>(`products/search_select`,"GET", null)
      .then((data) => {
        setProducts(data)
      });
      
    },[])

    console.log(allProducts)
    

  return (
    <div className='products-wrapper'>
      <Link to='/' className="position-absolute w-100 "><Button variant='outline-secondary' className='d-flex align-items-center'><FiArrowLeft className=''/> Back to main page</Button></Link>

      <h2 className='text-center'>Products</h2>
      <Table striped bordered hover className='text-center mt-100'>
      <thead>
        <tr>
          <th className='col-sm-4'>Name Of Product</th>
          <th className='col-sm-4'>Category</th>
          <th className='col-sm-4'>Action</th>
        </tr>
      </thead>
      <tbody>
        
          {allProducts?.data?.map((item: any) => {
            return (
              <tr key={item.id}>
                {Object.keys(item).filter(key => key==="label" || key==="group").map((prop:any) =>{
                  return <td key={prop}>{item[prop]}</td>
                }
                )}
                  <td>
                    <Link to={`/editProduct/${item.id}`}><Button variant="warning" >Edit</Button></Link>
                  </td>
              </tr>
            )
          })}
        
       
      </tbody>
    </Table>

      
    </div>
  )
}

export default Products
