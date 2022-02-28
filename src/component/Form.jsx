import React from 'react';
import "../component/Formstyle.css";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


function Form(){

var isLoggedIn = true; 

function renderConditionally() {
  if (isLoggedIn === true) {
    return alert("Form submitted")
  } else {
    return alert("Error");
  }
  
}


// reload Web site
  function submit() {
    {renderConditionally()};
    window.location.reload();
  }

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
        <Button variant="contained" onClick={submit}>Submit</Button>
        </div>
        
    </div>
  )
};

export default Form;
