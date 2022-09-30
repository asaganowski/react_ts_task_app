import React from "react";
import {
  Route,
  Routes,
  HashRouter  
} from "react-router-dom";
import "./App.scss"
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Home from "./components/Home/Home";
import EditProduct from "./components/Products/EditProduct";
import EditCategory from "./components/Categories/EditCategory";
import Add from "./components/Add/Add";

export default function App() {
  

  return (
    <div className="page">


    <HashRouter>
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/categories' element={<Categories />}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/editProduct/:id' element={<EditProduct />}/>
          <Route path='/editCategory/:id' element={<EditCategory />}/>
          
        </Routes>
        

    </HashRouter>
    
    </div>
  );
  
  
 }



 