import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import '../../../../../node_modules/react-toastify/dist/ReactToastify.css';
// const axios=require('axios');
import './signup.css'
import axios from 'axios';
import Header from '../../../layout/header/header';
import { isAuthenticate } from '../../../../middleware/authcheck';
import { useCallback, useEffect, useState } from 'react';
const Signup = () => {
    const history = useHistory();
    const [institutes, setInstitutes] = useState([]);
    const institute = useCallback(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/institute/all`).then(res => {
            if (res.data.status === 200) {
                setInstitutes(res.data.result)
            } else {
                console.log(res.data);
            }
        })
    },[]);
    useEffect(() => {
        institute();
        if (isAuthenticate()) {
            history.push('/profile');
        }
    }, [institute,history]);

    const { register, handleSubmit, reset } = useForm();
    const {register: register2,handleSubmit: handleSubmit2,reset:reset2 } = useForm({
        mode: "onBlur"
      });
    const registration1 = (data) => {
        console.log(data)
        data.roleId = 1;
        data.status = 'pending';
        axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, data).then(res => {
            if (res.data.status === 200) {
                toast.success(res.data.message)
                reset();
            } else {
                toast.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })

    }
    const registration2 = (data) => {
        console.log(data)
        data.roleId = 2;
        data.status = 'pending';
        axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, data).then(res => {
            if (res.data.status === 200) {
                toast.success(res.data.message)
                reset2();
            } else {
                toast.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })

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
                        <Link className="link m-auto" to="/login">LOGIN</Link><br />
                    </div>
                    <div className="col-md-9 col-sm-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#home">Student</a>
                                {/* <Link className="nav-link active" id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="true">Employee</Link> */}
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile" aria-selected="false">Student</Link> */}
                                <a class="nav-link"  data-toggle="tab" href="#profile">Teacher</a>

                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Apply as a Student</h3>
                                <div className="row register-form m-auto">
                                    <form key={1} onSubmit={handleSubmit(registration1)} style={{ width: "100%" }}>
                                        <div className="col-md-12 col-sm-12" >
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" autoComplete="new-name" required {...register('firstname')} placeholder="First Name *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" autoComplete="new-name" className="form-control" required {...register('lastname')} placeholder="Last Name *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" autoComplete="new-password" className="form-control" required {...register('password')} placeholder="Password *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" autoComplete="new-country" className="form-control" required {...register('country')} placeholder="country *" />
                                                    </div>
                                                    <div className="form-group" style={{ display: "flex" }}>
                                                        <label className="form-control-label" style={{ fontWeight: 500 }}>Gender * :</label>
                                                        <div className="maxl m-auto">
                                                            <label className="radio inline mr-2">
                                                                <input type="radio" {...register('gender')} value="male" required />
                                                                <span> Male </span>
                                                            </label>
                                                            <label className="radio inline">
                                                                <input type="radio" {...register('gender')} value="female" required />
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
                                                        <input type="text" {...register('phone')} className="form-control" required autoComplete="new-phone" placeholder="Your Phone *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password"{...register('confirmPassword')} className="form-control" required autoComplete="new-password" placeholder="Cnfirm Password *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" {...register('address')} required autoComplete="new-adress" placeholder="Enter Your Adress *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control" required {...register('instituteId')}>
                                                            <option className="hidden" value="" defaultValue="hello">Please select your Institute</option>
                                                            {institutes.map((object, index) => (
                                                                <option key={index} value={object.id}>{object.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <input type="submit" className="btnRegister" value="Register" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3 className="register-heading">Apply as a Teacher</h3>
                                <div className="row register-form m-auto">
                                    <form key={2} onSubmit={ handleSubmit2(registration2)} style={{ width: "100%" }}>
                                        <div className="col-md-12 col-sm-12" >
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" autoComplete="new-name" required {...register2('firstname')} placeholder="First Name *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" autoComplete="new-name" className="form-control" required {...register2('lastname')} placeholder="Last Name *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" autoComplete="new-password" className="form-control" required {...register2('password')} placeholder="Password *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" autoComplete="new-country" className="form-control" required {...register2('country')} placeholder="country *" />
                                                    </div>
                                                    <div className="form-group" style={{ display: "flex" }}>
                                                        <label className="form-control-label" style={{ fontWeight: 500 }}>Gender * :</label>
                                                        <div className="maxl m-auto">
                                                            <label className="radio inline mr-2">
                                                                <input type="radio" {...register2('gender')} value="male" required />
                                                                <span> Male </span>
                                                            </label>
                                                            <label className="radio inline">
                                                                <input type="radio" {...register2('gender')} value="female" required />
                                                                <span> Female </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" {...register2('email')} required autoComplete="new-email" placeholder="Your Email *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" {...register2('phone')} className="form-control" required autoComplete="new-phone" placeholder="Your Phone *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password"{...register2('confirmPassword')} className="form-control" required autoComplete="new-password" placeholder="Cnfirm Password *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" {...register2('address')} required autoComplete="new-adress" placeholder="Enter Your Adress *" />
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control" required {...register2('instituteId')}>
                                                            <option className="hidden" value="" defaultValue="hello">Please select your Institute</option>
                                                            {institutes.map((object, index) => (
                                                                <option key={index} value={object.id}>{object.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <input type="submit" className="btnRegister" value="Register" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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