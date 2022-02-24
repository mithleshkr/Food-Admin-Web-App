import React,{useState, useEffect} from 'react'
import {Tab,Tabs, Button, TextField} from '@material-ui/core';
import  EditIcon  from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";

import { DialogTitle } from "@material-ui/core";
import Userpopform from "./Userpopform";
import Prefilled from './Prefilled';


import './Food.css'
import { useHistory } from 'react-router';
import Foodpopup from './Foodpopup';
import {Link} from 'react-router-dom';







function Food() {

    const [display, setDisplay] = useState([]);

    const [fname, setFname] = useState("");
    const [fdetail, setFdetails] = useState("");
    const [fcal, setFcal] = useState("");
    const [userId, setUserId]= useState(null)

    useEffect(()=>{
        showDetails();

    },[])
    function deleteUser(id)
    {
        
        fetch(`http://localhost:3333/food/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                
            })
        })
    }

   

    const showDetails = async() => {
        const res= await fetch("http://localhost:3333/food").then((result)=>{
            result.json().then((resp)=>{
                setDisplay(resp)
                // setFname(resp[0].fname)
                // setFdetails(resp[0].fdetail)
                // setFcal(resp[0].fcal);
                // setUserId(resp[0].id)
            })
        })
    }

    const [open, setOpen] = React.useState(false);
    const [dopen, setDopen] = React.useState(false);

    function deletePop () {
        setDopen(true);
    }
    

  function editProduct  (id) {
    setOpen(true);
    console.warn("function called",display[id-1])
    let item= display[id-1];
    setFname(item.fname)
    setFdetails(item.fdetail)
    setFcal(item.fcal)
    setUserId(item.id)
   
  };

  function updateUser (){
      let item={fname, fdetail, fcal, userId}
      fetch(`http://localhost:3333/food/${userId}`,{
          method: 'PUT',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(item)
      }).then((result)=>{
          result.json().then((resp)=>{
              console.warn(resp)
              showDetails()
              alert("Update Successfully")
          })
      })
  }

  const handleClose =() => {
    setOpen(false);
  };

  const delClose = () =>{
      setDopen(false);
  }


    
    


    const history =useHistory();

    
    return ( 
        <div style={{display:"flex",flex:1,height:"100vh"}}>
            <div className="sidebar" style={{display:"flex",flex:1,height:"100vh",flexDirection:"column"}}>
                <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center"}}>
                
     
                            <Tabs > 
                         <Tab label="Dashboard" onClick={() => history.push("Dashboard")}/>
                       </Tabs>
                        <Tabs value={0}> 
                         <Tab label="Food" />
                         </Tabs>
                         <Tabs>
                         <Tab label="User" onClick={() => history.push("User")} />
                         </Tabs>
                    
                </div>
                <div>
                <Button  variant="contained" color="secondary" onClick={()=>history.push("/")}  >Logout</Button>
                </div>
                

               
            </div>
            <div style={{display:"flex",flex:7,height:"50vh",flexDirection:"column"}}>
                <h1 style={{display:"flex",justifyContent:"center"}}>List of Food</h1>
                {/* <tr style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginRight:300}}>
                    <td >Name</td>
                    </tr>
                    <tr>
                    <td >Details</td>
                    </tr>
                    <tr>
                    <td >Calorie</td>
                </tr> */}
                <div style={{display:"flex",flexDirection:"row"}}>
               <table style={{display:"flex",flexDirection:"row",marginLeft:150}}>
                   <tr >
                       <th>Name</th>
                       
                   </tr>
                   </table>
                   <table style={{display:"flex",flexDirection:"row",marginLeft:150}}>
                   <tr >
                       <th>Details</th>
                       
                   </tr>
                   </table>
                   <table style={{display:"flex",flexDirection:"row",marginLeft:150}}>
                   <tr >
                       <th>Calorie(Kcal)</th>
                       
                   </tr>
                   </table>
                   </div>
            {display.map(post =>{
                return(
                    
                    
                    <div style={{width:"100%",height:"10vh"}}>
                       
                       
                         <div style={{display:"flex",flexDirection:"row",alignItems:"center",flex:1,justifyContent:"space-around"}}>
                              
                        
                        

                        <card style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",flex:1,backgroundColor:"whitesmoke"}}>
                        {/* <p>{post.id}</p> */}
                        
                        <p >{post.fname}</p>
                        <p>{post.fdetail}</p>
                        <p>{post.fcal}</p>
                          {/* <Link to={"Prefilled"+post.id}>   */}
                        <Button 
                        onClick={() => editProduct(post.id)}
                       // onClick={handleClickOpen}
                        //onClick={()=>history.push("Editfood")}
                        color="primary"    
                        startIcon={<EditIcon />}
                        variant="contained" 
                         >    
                        </Button>
                         <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Food Details</DialogTitle>
        <DialogContent>
            <div style={{display:"flex",justifyContent:"center"}}>
            <form style={{display:"flex",flexDirection:"column"}}>
                    <TextField type="text" label="Food Name" placeholder="Name" value={fname} onChange={(e)=>setFname(e.target.value)} /> <br /> <br />
                    <TextField type="text" label="Details" placeholder="Details" value={fdetail} onChange={(e)=>setFdetails(e.target.value)} /> <br /> <br />
                    <TextField type="number" label="Calorie" color="primary" placeholder="Calorie" value={fcal} onChange={(e)=>setFcal(e.target.value)} /> <br /> <br />
                    <Button variant="contained" color="primary" size="small" type="button" disabled={!fcal + !fname + !fdetail} onClick={updateUser}>Update food</Button>
            </form>
            </div>
        </DialogContent>
      </Dialog>
                          {/* </Link>  */}
                        <Button
                        type="submit" 
                        color="primary"
                        startIcon={<DeleteIcon />}
                        variant="contained"
                        onClick={()=>deletePop(post.id) }>
                        </Button>
                        <Dialog open={dopen} onClose={delClose}>
                        {/* <DialogTitle>Confirm</DialogTitle>  */}
                        <DialogContent>
                            
                            <p>Are you sure want to delete?</p>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                            <Button onClick={()=>deleteUser(post.id) + window.location.reload(false)} size="small"  variant="contained" color="primary" >Delete</Button>
                            <Button onClick={()=>  window.location.reload(false)} size="small" type="submit" variant="contained" color="primary">Cancel</Button>
                            </div>
                        </DialogContent>
                        </Dialog>
                        </card>
                        
                        
                        </div>
                        
                            
                        
                        
                    </div>
                    
                )
            })}
                
            </div>
            <div style={{marginTop:600,position:"absolute",marginLeft:700}}>
            <Foodpopup />
            </div>
        </div>
    
        
    )
    
}

export default Food
