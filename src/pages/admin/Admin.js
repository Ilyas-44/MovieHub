
import Navbar from "../nav/Navbar";
import React, { Component } from "react";
import "./admin.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <div className="admin">
       
        
  
        <Navbar bg="dark" expand="lg" variant="dark"/>


        
      
       
            
              <div className='menu'>
              <Link to="/admin"> <button type="button" class="btn btn-outline-secondary text-light">MOVIES</button></Link>
              <Link to="/admin/users"><button type="button" class="btn btn-outline-secondary text-light">USERS</button></Link>
              <Link to="/admin/log-out"><button type="button" class="btn btn-outline-secondary text-light" > LOG OUT</button></Link>
              <Link to="/home"> <button type="button" class="btn btn-outline-secondary text-light">Preview</button></Link>
              </div>
              <div className='content'>
                <Outlet />
              </div>
  
              
            
        
    
        
   
       
      </div>
    );
  }
}

export default Admin;

