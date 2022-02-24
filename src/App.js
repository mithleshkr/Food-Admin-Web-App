import React from 'react';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import Food from './Screens/Food';
import User from './Screens/User';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Prefilled from './Screens/Prefilled';
import Edituser from './Screens/Edituser';




function App() {
  return (
    <Router>
    <Route path='/' exact component={Login}/>
    <Route path='/Dashboard' component={Dashboard}/>
    <Route path='/Food' component={Food}/>
    <Route path='/User' component={User}/>
    <Route path='/Editfood/:id' component={Prefilled}/>
    <Route path='/Edituser/:id' component={Edituser}/>
  </Router>
  )
}

export default App;
