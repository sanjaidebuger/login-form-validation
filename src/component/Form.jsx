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
