import React from 'react';
import "../component/Formstyle.css";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


function Form(){

var isLoggedIn = false; 

function renderConditionally() {
  if (isLoggedIn === true) {
    return alert("Form submitted")
  } else {
    return alert("Error");
  }
  
}


// onclick 
  // function submit() {
  //   alert('Form submitted')
  //   window.location.reload();
  // }

// main content
  return (
    <div className="container">
        <h1>Login Detail</h1>
        <div className="col">
        <TextField
          required
          id="outlined-required"
          label="Username"
          placeholder='User Name'
        />
        </div>
        <div className="col">
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder='Password'
        />
        </div>
        <div className='submit'>
        <Button variant="contained" onClick={renderConditionally}>Submit</Button>
        </div>
        
    </div>
  )
};

export default Form;
