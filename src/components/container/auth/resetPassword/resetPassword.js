import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import Header from '../../../layout/header/header';


const ResetPassword = () => {
    const {register,handleSubmit,reset}=useForm();
    const {email}=useParams();
    console.log(email);
    const  rstPassword =(data)=>{
        if(data.password === data.confirmPassword){
          axios.post(`${process.env.REACT_APP_API_URL}/auth/resetPassword`,{email:email,new_password:data.password}).then(res=>{
              if(res.data.status ===200){
                  toast.success(res.data.message);
                  reset();  
              }else{
                  toast.error(res.data.message)
              }
          })
        }else{
            toast.error('Password does not matched')
        }
    }
    return (
        <div>
            <Header />
            <div className="container register">
                <ToastContainer />
                <div className="row">
                    <div className="col-md-3 col-sm-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <Link className="link ml-auto mr-auto" to="/login">LOGIN</Link>
                    </div>
                    <div className="col-md-9 col-sm-9 register-right">
                        {/* <ul   className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li   className="nav-item">
                                <a   className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                            </li>
                            <li   className="nav-item">
                                <a   className="nav-link" id="forget-tab" data-toggle="tab" href="#forget" role="tab" aria-controls="forget" aria-selected="false">forget</a>
                            </li>
                        </ul> */}
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">RESET PASSWORD</h3>

                                <div className="row register-form">
                                    <div className="col-md-6 col-sm-10 m-auto">
                                        <form  onSubmit={handleSubmit(rstPassword)} style={{ width: "100%" }}>

                                            <div className="form-group">
                                                <input type="text" className="form-control" autoComplete="new-email" required {...register('password')} placeholder="New password *" />
                                            </div>

                                            <div className="form-group">
                                                <input type="password" className="form-control" autoComplete="current-password" required {...register('confirmPassword')} placeholder="Confirm Password *" />
                                            </div>

                                            <input type="submit" className="btnRegister" value="SUBMIT" />
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
