import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";


const EditUs = () => {
    const [users , setUsers] = useState(
        null
    )
    const API_URL ="http://localhost:3000/users"
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        const getUsersInfo = async () => {
        const {data} = await axios.get(`${API_URL}/${id}`)
        console.log(`specific user`,data)
        setUsers(data)
    }
    getUsersInfo()
},[id])
const handleSave = async () => {
    console.log(users)
    await axios.put(`${API_URL}/${users.id}`,users);
    navigate('/admin/users')
  };
     
    
  const handleCancel = () => {
    navigate('/admin/users')
  };
  
  return (
    <div className='add'>
      <h1>Edit User</h1>
      <form action="" className='formadd'>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"  value={users?.name}
       onChange={(e) => setUsers({...users, name: e.target.value})} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  value={users?.password}
       onChange={(e) => setUsers({...users, password: e.target.value})}  />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={users?.age}
       onChange={(e) => setUsers({...users, age: e.target.value})} />
        </div>
       
        <input type="button" value="Save" className='inptadd' onClick={handleSave}/> <br />
        <input type="button" value="Cancel" className='inptadd' onClick={handleCancel}/> <br />
      
      </form>
    </div>
  );
};

export default EditUs;
