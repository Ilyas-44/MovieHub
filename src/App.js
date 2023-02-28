import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import Navbar from './pages/nav/Navbar';
import  Users  from './pages/admin/Users'
import Logout from "./pages/admin/Logout"
import Movies from './pages/admin/Movies';
import Add_movies from './pages/admin/Add_movies';
import Edit from './pages/admin/Edit';
import Delete from './pages/admin/Delete';
import EditUs from './pages/admin/EditUs';
import DeleteUs from './pages/admin/DeleteUs';
import Detail from './pages/home/Detail';
import Search from './pages/home/Search';
import UsLog from './pages/login/UsLog';
import Inscr from './pages/login/Inscr';

function App() {



  return (

   
    
      <div className="App">
    
    
      <Routes>
      <Route path="/" element={<UsLog />} />
      <Route path="/inscription" element={<Inscr />} />
            <Route path="/home" exact element={<Home />} >          
            </Route>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />   
            <Route path="/admin" element={<Admin />} >
              <Route index element={ <Movies /> } />
              <Route path="/admin/users" element={<Users />} /> 
              <Route path="/admin/log-out" element={<Logout />} />
              <Route path="/admin/Add_movies" element={<Add_movies />} />
              <Route path="/admin/Edit/:id" element={<Edit />} />
              <Route path="/admin/Delete/:id" element={<Delete />} />
              <Route path="/admin/EditUs/:id" element={<EditUs />} />
              <Route path="/admin/DeleteUS/:id" element={<DeleteUs />} />
            </Route>
      </Routes>




      </div>  
   
  );
}

export default App;
