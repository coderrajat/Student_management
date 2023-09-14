import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from '../component/auth/Dashboard';
import AuthNavbar from '../component/auth/AuthNavbar';

function Authrouter() {
  return (
    <Routes>
        <Route exact path='/dashboard' element={<AuthNavbar/>}>    
        <Route exact path='/dashboard' element={<Dashboard/>}/>
            </Route>
    </Routes>
  )
}

export default Authrouter