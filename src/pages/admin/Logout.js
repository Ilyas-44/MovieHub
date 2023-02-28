import React from 'react';
import {Link} from "react-router-dom";


const Logout = () => {
  return (
    <div className='dvlg'>
      <h1 className='warning'>
        Are you sure you want to log-out !

      </h1> <br />
      <Link to="/login"> <button type="button" class="btn btn-outline-danger btn-lg">LOG-OUT</button></Link>
    
    </div>
  )
}

export default Logout
