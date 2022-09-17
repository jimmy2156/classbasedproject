
import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Todolist from './components/todolist';
import Error from './components/Error';
import Sharedlink from './components/Sharedlivnk';
import Products from './components/products';
import SingleProducts from './components/singleproducts';
import Login from './components/login';
import Dashboard from './components/dashboard';
import { useState } from 'react';
import ProtectedRoute from './components/protectedroute';
import SingleSharedProducts from './components/singlesharedproducts';



function App() { 
 const [user, setUser] = useState([{
  name:'',
  email:''
 }])
  

  return (
    <BrowserRouter>
    <Routes>
 <Route path='/' element={<Sharedlink />} >
 <Route index element={<h1>hi how are u</h1>} />
  <Route path='Navbar' element={<Navbar />} />
  <Route path='todolist' element={<Todolist />} />
  <Route path='products' element={<SingleSharedProducts />} >
  <Route index element={<Products />} />
  <Route path='products/:productId' element={<SingleProducts />} />
  </Route>
  <Route path='login' element={<Login setUser={setUser}/>} />
  <Route path='dashboard' element={<ProtectedRoute user={user}>
    <Dashboard user={user}/>
  </ProtectedRoute>
  
  } />
  <Route path="*" element={<Error />} />
  
  </Route>

   </Routes>
   </BrowserRouter>
  )
}

  
export default App;
    