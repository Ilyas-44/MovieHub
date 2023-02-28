import { useState } from 'react';
import axios from 'axios';
import Navbar from '../nav/Navbar';
import './login.css';

function Inscr() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', { id, name, password, age });
      console.log(response.data);
      alert('Signup successful!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
   <nav class="navbar  navbar-dark ">
       <h1 className="DATA"> MOVIES DATA </h1>

    </nav>  
    <h1>WELCOME, HERE YOU CAN REGISTER</h1>

              <div className='cnt' >

    <form className='frmlg' onSubmit={handleSubmit}>
      <div>
        <label className="lbllg">Username:</label>
        <input className="inptlg" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="lbllg" >Password:</label>
        <input className="inptlg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label className="lbllg" >id:</label>
        <input className="inptlg" type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label className="lbllg" >age:</label>
        <input className="inptlg" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-outline-dark text-light">inscription</button>
    </form>
    </div>
        <div className="footer"></div>

    </>
  );
}

export default Inscr;

