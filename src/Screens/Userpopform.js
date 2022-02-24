import React, { useState } from "react";
import { TextField,Button } from "@material-ui/core";


function Userpopform() {
  const [uname, setUname] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function save() {
    console.warn({ uname, age, height, weight, username, password });
    let data={uname, age, height, weight, username, password}
    fetch("http://localhost:3333/user",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
     }).then((result)=>{
         console.warn("result",result);
        

     })
  }

  const nameChangeHandler = (e) => {

    if (e.target.value.match(/[a-z]/i) || e.target.value === '') {

      setUname(e.target.value);

    }
      


    }

  

  return (
    <div>
      <form style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <TextField
          label="User Name"
          placeholder="Enter User Name"
          type="text"
          pattern="[a-zA-Z]*"
          
          value={uname}
          onChange={(e) => nameChangeHandler(e)}
          name="uname"
        />{" "}
        <br /> 
        <TextField
          label="Age"
          placeholder="Enter User Age"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          name="age"
        />{" "}
        <br /> 
        <TextField
          label="height in cm"
          placeholder="Enter User Height"
          type="number"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          name="height"
        />{" "}
        <br /> 
        <TextField
          label="weight"
          placeholder="Enter User Weight"
          type="number"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          name="weight"
        />{" "}
        <br />
        <TextField
          label="username"
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="username"
        />{" "}
        <br /> 
        <TextField
      
          label="password"
          placeholder="Enter User password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="height"
        />{" "}
        <br /> 
        <Button 
        
        disabled={!password + !uname + !age + !height + !weight + !username }
        variant="contained" color="primary" type="submit" onClick={save}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default Userpopform;
