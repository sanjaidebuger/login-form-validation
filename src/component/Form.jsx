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