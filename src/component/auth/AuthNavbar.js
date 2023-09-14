import React from "react";
import { Link,Outlet } from "react-router-dom";
import '../../staticfile/style.css'

export default function AuthNavbar() {
  return (
   <>
     <header>
        <nav className='navbar navbar-expand-lg fixed-top header'>
            <div className='container-fluid px-4'>
                <div className='d-flex justify-content-center align-items-center'>
                    <label className="font_20 font_b2">Student Management System</label>
                </div>
                <div className="d-flex">
                <Link className='navbar-brand' to='/dashboard'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <label className="">Dashboad</label>
                    </div>
                </Link>
                <Link className='navbar-brand' to='/assginment'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <label className="">Asignment</label>
                    </div>
                </Link>
                <Link className='navbar-brand' to='/course'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <label className="">Course</label>
                    </div>
                </Link>
                </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <label className="">Your Name</label>
                    </div>
            </div>
        </nav>
    </header>
    <Outlet />
  </>
  )
}
