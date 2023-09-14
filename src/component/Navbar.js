import React from "react";
import { Link } from "react-router-dom";
import './../staticfile/style.css'
import { Outlet } from 'react-router-dom';
import SignUp from "./SignUp";

function Navbar() {
  return (<>
  <header>
        <nav className='navbar navbar-expand-lg fixed-top header'>
            <div className='container-fluid px-4'>
                <Link className='navbar-brand' to='/home'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <label className="">Student Management System</label>
                    </div>
                </Link>
            </div>
        </nav>
    </header>
    <Outlet />
  </>
  )
}

export default Navbar