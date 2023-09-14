import React, {useState} from "react";
import { Link } from "react-router-dom";
import './../staticfile/style.css'
import axiosInstance from "../tool/axios";

function SignUp() {
    const [state , setState]=useState({
        first_name:'',
        last_name:'',
		email:'',
        phone_number:'',
        DOB:'',
		password: '',
        confirm_password:'',
        cls_name:'',
	});

    const [errMsg,setErrMsg]=useState({
        first_name:null,
        last_name:null,
		email: null,
        phone_number:null,
        DOB:null,
		password: null,
        confirm_password:null,
	});

    const Handler=(e)=>{
        console.log(e.target.name,e.target.value)
        setState({...state, [e.target.name]: e.target.value})
        setErrMsg({...errMsg, [e.target.name]: null})

    }
    const cls=[1,2,3,4,5,6,7,8,9,10,11,12]

    const SignUptriger = async (response) => {
        if(state.first_name === ""){
			setErrMsg({...errMsg, first_name: "First Name cannot be empty"});
			return
		}
        else if(state.last_name === ""){
			setErrMsg({...errMsg, last_name: "Last Name cannot be empty"});
			return
		}
        if(state.phone_number === ""){
			setErrMsg({...errMsg, phone_number: "Phone number cannot be empty"});
			return
		}
       
        if(state.email === ""){
			setErrMsg({...errMsg, email: "Email cannot be empty"});
			return
		}
        if(state.DOB === ""){
			setErrMsg({...errMsg, DOB: "Date of birth cannot be empty"});
			return
		}

		if(state.password === ""){
			setErrMsg({...errMsg, password: "Password cannot be empty"});
			return
		}
        if(state.confirm_password === ""){
			setErrMsg({...errMsg, confirm_password: "Confirm Password cannot be empty"});
			return
		}

		
        let formData = new FormData();
        formData.append('first_name', state.first_name);
		formData.append('last_name', state.last_name);
        formData.append('phone_number', state.phone_number);
        formData.append('email', state.email);
        formData.append('DOB', state.DOB);
        formData.append('cls_name', state.cls_name);
        formData.append('password',state.password)
        formData.append('confirm_password', state.confirm_password);
        await axiosInstance.post(
            "accounts/student_registration", 
            formData,
            {headers: {'content-type': 'multipart/form-data'}}
            )
            .then((response) => {
                console.log(response)
                
            }).catch((err) => {
                console.log(err.response.data.error_msg)
                    if (err.response.data.error_msg==='This phone number already exists'){
                        setErrMsg({...errMsg, phone_number: "This phone number already exists"});
                        return
                    }
                    if (err.response.data.error_msg==='This email already exists'){
                        setErrMsg({...errMsg, email: "This email already exists"});
                        return
                    }
            })
        }
  return (
    <>

        <div className='login p-1'>
				<div className='container d-flex justify-content-center'>
					<div className="SignUpform align-items-center">
                        <div className="d-flex justify-content-center font_20 font_b2">SignUp</div>
                        <div className="d-flex flex-column">
                            <label>profile</label>
                            <input className="form-control" type='file'/>
                        </div>
                        <div className="d-flex ">
                            <div className="col-6 p-1">
                                <label>First Name</label>
                                <input className="form-control" onChange={Handler} name='first_name' type='text' placeholder="First Name"/>
                                
                                {errMsg.first_name &&<div className="input__err__group">
                                    <span>{errMsg.first_name}</span>

                                </div>}
						        
                            </div>
                            <div className=" col-6 p-1">
                                <label>Last Name</label>
                                <input className="form-control" onChange={Handler} name='last_name' type='text' placeholder="Last Name"/>
                                {errMsg.last_name &&<div className="input__err__group">
                                    <span>{errMsg.last_name}</span>

                                </div>}
                            </div>
     
                        </div>
                        <div className="d-flex mb-3">
                            <div className="col-6 p-1">
                                <label>Email</label>
                                <input className="form-control" onChange={Handler} name='email' type='email' placeholder="example@email.com"/>
                                {errMsg.email &&<div className="input__err__group">
                                    <span>{errMsg.email}</span>

                                </div>}
                            </div>
    
                            <div className=" col-6 p-1">
                                <label>Phone Number</label>
                                <input className="form-control" onChange={Handler} name='phone_number' type='tel' placeholder="Phone Number"/>
                                {errMsg.phone_number &&<div className="input__err__group">
                                    <span>{errMsg.phone_number}</span>

                                </div>}
                            </div>
                            
                        </div>
                        <div className="d-flex mb-3">
                            <div className="col-6 p-1">
                                <label>DOB</label>
                                <input className="form-control" onChange={Handler} type='date' name='DOB' placeholder="example@email.com"/>
                                {errMsg.DOB &&<div className="input__err__group">
                                    <span>{errMsg.DOB}</span>
                                </div>}
                            </div>
                         
                            <div className=" col-6 p-1">
                                <label>Class Type</label>
                                <select className="form-control" >
                                    {cls.map((i)=><option onChange={Handler} name='cls_name'>{i}</option>)}
                                    
                                </select>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                        <div className="col-6 p-1">
                            <label>Password</label>
                            <input className="form-control" onChange={Handler} name='password' type='password' placeholder="passsword"/>
                            {errMsg.password &&<div className="input__err__group">
                                    <span>{errMsg.password}</span>

                                </div>}
                        </div>
                        
                        <div className="col-6 p-1">
                            <label>Confirm Password</label>
                            <input className="form-control" onChange={Handler} name='confirm_password' type='password' placeholder="passsword"/>
                            {errMsg.confirm_password &&<div className="input__err__group">
                                    <span>{errMsg.confirm_password}</span>
                                </div>}
                        </div>
                        
                        </div>
                       
                   
                    <div>
                        <button className="loginbutton" onClick={SignUptriger}>SignUp</button>
                    </div>
                </div>
			</div>
		</div>
           
    </>
  )
}

export default SignUp