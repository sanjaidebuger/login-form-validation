import './App.css';
import { TextField, Typography, Button } from "@material-ui/core";

function App() {

 

  return (
    <form>
    <div><Typography variant='h1'>Form</Typography></div>
    <div><TextField
     id="outlined-name"
     label="Username"
     
   />
   <TextField
     id="outlined-name"
     label="Password"
     
   /></div>  
   <div><Button variant="text" color="default">Submit</Button></div>
   
      
    </form>
  );
}

export default App;
