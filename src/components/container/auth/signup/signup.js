import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {ToastContainer,toast} from 'react-toastify';
import '../../../../../node_modules/react-toastify/dist/ReactToastify.css';
// const axios=require('axios');
import './signup.css'
import axios from 'axios';
import Header from '../../../layout/header/header';
import { isAuthenticate } from '../../../../middleware/authcheck';
import { useEffect } from 'react';
const Signup = () => {
    const history=useHistory();
    useEffect(() => {
        if(isAuthenticate()){
            history.push('/profile');
          }
    },[history]);

    const {register,handleSubmit,reset}=useForm();
    const registration=(data)=>{
        data.roleId=1;
        data.status='pending';
        axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`,data).then(res=>{
            if(res.data.status===200){
               toast.success(res.data.message)
               reset();
            }else{
                toast.error(res.data.message)
            }
        }).catch(err=>{
            console.log(err)
        })

    }
    return (
        <div>
        <Header/>   
        <div className="container register">
        <ToastContainer />
            <div className="row">
                <div className="col-md-3 col-sm-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                    <p>You are 30 seconds away from earning your own money!</p>
                    <Link className="link m-auto" to="/login">LOGIN</Link><br />
                </div>
                <div className="col-md-9 col-sm-9 register-right">
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Student</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Apply as a Employee</h3>
                            <div className="row register-form m-auto">
                                <form onSubmit={handleSubmit(registration)}  style={{width:"100%"}}>
                                    <div className="col-md-12 col-sm-12" >
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <input type="text"  className="form-control" autoComplete="new-name" required {...register('firstname')} placeholder="First Name *" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" autoComplete="new-name" className="form-control" required {...register('lastname')} placeholder="Last Name *" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" autoComplete="new-password" className="form-control" required {...register('password')}  placeholder="Password *" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" autoComplete="new-country" className="form-control" required {...register('country')}  placeholder="country *" />
                                                </div>
                                                <div className="form-group" style={{ display: "flex" }}>
                                                    <label className="form-control-label" style={{ fontWeight: 500 }}>Gender * :</label>
                                                    <div className="maxl m-auto">
                                                        <label className="radio inline mr-2">
                                                            <input type="radio" {...register('gender')}  value="male" required />
                                                            <span> Male </span>
                                                        </label>
                                                        <label className="radio inline">
                                                            <input type="radio" {...register('gender')}  value="female" required/>
                                                            <span> Female </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" {...register('email')} required autoComplete="new-email" placeholder="Your Email *" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" {...register('phone')}  className="form-control" required autoComplete="new-phone" placeholder="Your Phone *" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password"{...register('confirmPassword')}  className="form-control" required autoComplete="new-password" placeholder="Cnfirm Password *" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" {...register('address')} required autoComplete="new-adress"  placeholder="Enter Your Adress *" />
                                                </div>
                                                <input type="submit" className="btnRegister" value="Register" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 className="register-heading">Apply as a Student</h3>
                            <div className="row register-form">
                                <div className="col-md-6 col-sm-10">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name *" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name *" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email *" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Phone *" />
                                    </div>


                                </div>
                                <div className="col-md-6n col-sm-10">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password *" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirm Password *" />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option className="hidden" value="hello" defaultValue="hello">Please select your Sequrity Question</option>
                                            <option>What is your Birthdate?</option>
                                            <option>What is Your old Phone Number</option>
                                            <option>What is your Pet Name?</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="`Answer *" />
                                    </div>
                                    <input type="submit" className="btnRegister" value="Register" />
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


export default Signup;