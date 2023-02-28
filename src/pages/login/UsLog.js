import { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from '../nav/Navbar';
import { Link } from 'react-router-dom';



function UsLog() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/users?username=${name}&password=${password}`);
      if (response.data.length > 0) {
        navigate("/home");

      } else {
        alert('Username or password not found!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
<nav class="navbar  navbar-dark ">
       <h1 className="DATA"> MOVIES DATA </h1>

    </nav>  
        <div className='cnt' >
  

    <form className='frmlg' onSubmit={handleSubmit}>
                 <h1>HELLO user</h1>

      <div>
            <label className="lbllg" >username :</label>
        <input type="text" className="inptlg" placeholder='your name here'  value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="lbllg" >Password:</label>
        <input type="password" className="inptlg" 
              placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Link to="/inscription">i'm a new member / Signup </Link>
      <Link to="/login">i'm an admin </Link>

      <button type="submit" className="btn btn-outline-dark text-light">Log in</button>
    </form>
          
    </div>
    <div className="footer"></div>
    </>
  );
}

export default UsLog;
