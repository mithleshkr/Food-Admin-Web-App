import React,{useState, useEffect} from 'react'
import {Tab,Tabs, Button} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import { DirectionsRailway } from '@material-ui/icons';


function Dashboard() {

    const [display, setDisplay] = useState([]);

    const[fdisplay, setFdisplay] = useState([]);
    
    useEffect(()=>{
        showDetails();
        foodDetails();

    },[])

    const showDetails = async() => {
        const res= await fetch("http://localhost:3333/user")
        .then((res)=>res.json())
        .then((data)=>setDisplay(data))
        
    }
    const foodDetails = async() => {
        const res= await fetch("http://localhost:3333/food")
        .then((res)=>res.json())
        .then((data)=>setFdisplay(data))
        
    }
    



    const history=useHistory();
    return (
        <div style={{display:"flex",flex:1,height:"100vh"}}>
            <div className="sidebar" style={{display:"flex",flex:1,height:"100vh",flexDirection:"column"}}>
                <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center"}}>
                            <Tabs value={0}> 
                         <Tab label="Dashboard" />
                       </Tabs>
                        <Tabs> 
                         <Tab label="Food" onClick={() => history.push("Food")}/>
                         </Tabs>
                         <Tabs  >
                         <Tab label="User" onClick={() => history.push("User")} />
                         </Tabs>
                    
                </div>
                <div>
                <Button  variant="contained" color="secondary" onClick={()=>history.push("/")}  >Logout</Button>
                </div>


            </div>
            <div style={{display:"flex",flex:7,height:"100vh",flexDirection:"column"}}>
               <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:150}}>
                   <div style={{height:"50vh",backgroundColor:"whitesmoke",width:"300px"}}>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <h1 style={{fontSize:"100px"}}>{fdisplay.length}</h1>
                        </div>
                        <div style={{display:"flex",marginTop:100,justifyContent:"center"}}>
                            <p>Total Number of Food</p>
                        </div>

                   </div>
                   <div style={{height:"50vh",backgroundColor:"whitesmoke",width:"300px"}}>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <h1 style={{fontSize:"100px"}}>{display.length}</h1>
                        </div>
                        <div style={{display:"flex",marginTop:100,justifyContent:"center"}}>
                            <p>Total number of User</p>
                        </div>
                   </div>
                   <div style={{height:"50vh",backgroundColor:"whitesmoke",width:"300px",
                        overflowY: "auto"}}>
                       <div style={{display:"flex",justifyContent:"space-evenly"}}>
                        <div>
                            <p>Name</p>
                        </div>
                        <div>
                            <p>UserName</p>
                        </div>
                        </div>
                        {display.map(post =>{
                            return(
                                
                        <div style={{display:"flex",justifyContent:"space-evenly"}}>
                        <div>
                            <h5>{post.uname}</h5>
                        </div>
                        <div>
                            <h5>{post.username}</h5>
                        </div>
                        </div>
                        
                        )
                    })}
                        {/* <div style={{display:"flex",justifyContent:"center",marginTop:250,alignItems:"center"}}>
                            <p>Recently Added User</p>
                        </div> */}
                   </div>
               </div>
                
                    <p style={{display:"flex",justifyContent:"flex-end",marginTop:50,marginRight:150}}>Recently Added User</p>
            </div>
           
        </div>
    )}

export default Dashboard
