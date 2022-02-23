<<<<<<< HEAD
import React from 'react';
import "../component/Formstyle.css"

function Form(){
  return (
    <div className="container">
        <h1>Login Detail</h1>
        <div className="col">
            <h4>User Name: </h4>
            <input type="text" placeholder="User Name"/>
        </div>
        <div className="col">
            <h4>Password: </h4>
            <input type="text" placeholder="Password"/>
        </div>
        <div className='submit'>
        <input type="submit" value="Submit" />
        </div>
        
    </div>
  )
};

export default Form;
=======
import React from "react";


function Form() {
    return(
     <div className="container">
        <div className="row">
            <label>Name</label>
            <input type="text" placeholder="Your Name"/>
        </div>
        <div className="row">
            <label>Password</label>
            <input type="text" placeholder="Your Name"/>
        </div>
        <input type="submit" value="submit" placeholder="Submit" />
        
         

     </div>
    )
};

export default Form ;
>>>>>>> 93b52b42c3cd0836df80e3022d45d8dfccbf7c0d
