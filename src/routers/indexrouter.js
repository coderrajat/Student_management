import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../component/Homepage";
import Login from "../component/Login";
import Navbar from "../component/Navbar";
import SignUp from "../component/SignUp";
import Authrouter from "./authrouter";

function Indexrouter() {
  return (
     <Router>
        
            <Routes>
            <Route exact path='/' element={<Navbar />}>
                <Route exact path='/' element={<Login/>}/>
                <Route exact path='/register' element={<SignUp/>}/>
                </Route>
            </Routes>
            <Authrouter/>
		</Router>
       
  )
}

export default Indexrouter