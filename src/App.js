import React, { createContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Home/Navbar/Navbar';
import Home from './components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login/Login';
import CustomerOrder from './components/CustomerOrder/CustomerOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceList from './components/ServiceList/ServiceList';
import MainReview from './components/MainReview/MainReview';

import AddService from './components/AddService/AddService';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import AdminServiceList from './components/AdminServiceList/AdminServiceList';
export const UserContext=createContext()

function App() {

  const [loggedInUser,setloggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setloggedInUser]}>
      
    <Router>
   
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <PrivateRoute path="/customerOrder">
           <CustomerOrder></CustomerOrder>
        </PrivateRoute>
      
        <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
     <Route path="/serviceList">
        <ServiceList></ServiceList>
     </Route>
     <Route path="/mainReview">
        <MainReview></MainReview>
     </Route>
     <Route path="/addservice">
     <AddService></AddService>
     </Route>
     <Route path="/adminServiceList">
      <AdminServiceList></AdminServiceList>
     </Route>
     </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
