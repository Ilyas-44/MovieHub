import React from 'react'

const validation = (email,pass) => {
    let errors = {
        email: null,
        pass: null
    }
    
    if(!email){
        errors.email = "EMail required"
    }
    if (email.length<5){
        errors.email = "email must be more than 5 caracters"
    } 
    if(!pass){
        errors.pass = "Password required"
    }
    else if (pass.length<5){
        errors.pass = "password must be more than 5 caracters"
    }
  return errors ;
}

export default validation
