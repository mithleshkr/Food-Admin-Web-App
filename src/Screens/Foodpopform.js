import React, { useState, useEffect } from "react";
import { TextField,Button } from "@material-ui/core";


function Foodpopform() {
  const [fname, setFname] = useState("");
  const [fdetail, setFdetails] = useState("");
  const [fcal, setFcal] = useState("");

  
  function save() {
    console.warn({ fname, fdetail, fcal });
    let data={fname, fdetail, fcal}
    fetch("http://localhost:3333/food",{
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
  useEffect(() => {
    
    function save() {
      console.warn({ fname, fdetail, fcal });
      let data={fname, fdetail, fcal}
      fetch("http://localhost:3333/food",{
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
    
  
  },[])


  const nameChangeHandler = (e) => {

    if (e.target.value.match(/[a-z]/i) || e.target.value === '') {

      setFname(e.target.value);

    }
      


    }

  return (
    <div>
      <form style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <TextField
          label="Food Name"
          placeholder="Enter Food Name"
          type="text"
          value={fname}
          onChange={(e) => nameChangeHandler(e)}
          required
          name="ptitle"
        />{" "}
        <br /> <br />
        <TextField
          label="Details"
          placeholder="Enter food details"
          type="text"
          value={fdetail}
          onChange={(e) => {
            setFdetails(e.target.value);
          }}
          name="ptype"
        />{" "}
        <br /> <br />
        <TextField
          label="Calorie"
          placeholder="Enter Food Calorie(Kcal)"
          type="number"
          value={fcal}
          onChange={(e) => {
            setFcal(e.target.value);
          }}
          name="prole"
        />{" "}
        <br /> <br />
        <br /> <br />
        <Button 
        disabled={!fcal + !fname + !fdetail}
        variant="contained" color="primary" type="submit" onClick={save}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default Foodpopform;
