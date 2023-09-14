import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './../staticfile/style.css'
import axiosInstance from "../tool/axios";

function Login() {
    const [state , setState]=useState({
		email:"",
		password:"",
	});

    const history=useNavigate()

    const Handler=(e)=>{
        setState({...state, [e.target.name]: e.target.value})

    }
    console.log(state)

    const Login = async (response) => {
        let formData = new FormData();
		formData.append('email', state.email);
        formData.append('password',state.password)
        await axiosInstance.post(
            "accounts/login_student", 
            formData,
            {headers: {'content-type': 'multipart/form-data'}}
            )
            .then((response) => {
                alert('please wait')
                if(response.data.success){
                    
                    localStorage.setItem("user__token", response.data.token);
                    history('/Dashboard')
                    }
                
            }).catch((err) => {
                console.log(err.response)
                    
                    if (err.response.data.error_msg==='Verified your mail'){
                        alert('Your account is not active. Please contect with admin')
                    }
                    else{
                        alert('Invalid Credentials. Please check your email and password')
                    }
                

            })
        }
  return (
   <>
        <div className='login p-1'>
				<div className='container d-flex justify-content-center'>
					<div className="loginform align-items-center mt-2">
                        <div className="d-flex justify-content-center font_20 font_b2">Login</div>
                        <div className="d-flex flex-column mb-3">
                            <label>Email</label>
                            <input className="form-control"  name='email' onChange={Handler} type='email' placeholder="example@email.com"/>
                        </div>
                        <div className="d-flex flex-column">
                            <label>Password</label>
                            <input className="form-control"  name='password' onChange={Handler} type='password' placeholder="passsword"/>
                        </div>
                   
                    <div>
                        <button className="loginbutton" onClick={Login}>Login</button>
                    </div>

					
				<div className='footer'>
					<p>
						Don't have an account? <Link to={"/register"}><strong>Register now!</strong></Link>
					</p>
				</div>
                </div>
			</div>
		</div>
           
   </>
  )
}

export default Login