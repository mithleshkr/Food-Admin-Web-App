import React,{useState, useEffect} from 'react'
import {Tab,Tabs, Button} from '@material-ui/core';
import {useHistory, withRouter} from "react-router-dom";


function Edituser(props) {

const [data, setData]= useState([])
const [uname, setUname] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


   
    useEffect( async ()=>{
       let result= await fetch("http://localhost:3333/user/"+props.match.params.id);
       result = await result.json();
       setData(result)
       setUname(result.uname)
       setAge(result.age)
       setHeight(result.height)
       setWeight(result.weight)
       setUsername(result.username)
       setPassword(result.password);
    },[])
     function editProduct()
    {
        let item = {uname, age, height, weight, username, password}
        fetch("http://localhost:3333/user/"+props.match.params.id, {
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                

        })
        alert("Data has been updated")
        })
    }



   

    const history=useHistory();
    
    return (
        <div style={{display:"flex",flex:1,height:"100vh"}}>
            <div className="sidebar" style={{display:"flex",flex:1,height:"100vh",flexDirection:"column"}}>
                <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center"}}>
                            <Tabs > 
                         <Tab label="Dashboard"  onClick={() => history.push("/Dashboard")}/>
                       </Tabs>
                        <Tabs  > 
                         <Tab label="Food"/>
                         </Tabs>
                         <Tabs value={0} >
                         <Tab label="User" onClick={() => history.push("/User")} />
                         </Tabs>
                    
                </div>
                <div>
                <Button  variant="contained" color="secondary" onClick={()=>history.push("/")}  >Logout</Button>
                </div>


            </div>
            <div style={{display:"flex",flex:7,height:"100vh",flexDirection:"column"}}>
                
           <form style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:200}}>
            <input
            onChange={(e)=>setUname(e.target.value)}
            type="text" defaultValue={data.uname}/> <br />
            <input
            onChange={(e)=>setAge(e.target.value)}
            variant="outlined" type="text" defaultValue={data.age}/> <br />
            <input
            onChange={(e)=>setHeight(e.target.value)}
            type="text" defaultValue={data.height}/> <br />
            <input
            onChange={(e)=>setWeight(e.target.value)}
            type="text" defaultValue={data.weight}/> <br />
            <input
            onChange={(e)=>setUsername(e.target.value)}
            type="text" defaultValue={data.username}/> <br />
            <input
            onChange={(e)=>setPassword(e.target.value)}
            type="text" defaultValue={data.password}/> <br />
            <Button 
            onClick={()=>editProduct(data.id)}
            variant="contained" color="primary">Update User</Button>
            </form>

            </div>
           
        </div>
    )}

export default withRouter(Edituser);
