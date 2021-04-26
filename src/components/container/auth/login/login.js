import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useHistory, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { isAuthenticate, setAuthneticate } from '../../../../middleware/authcheck';
import Header from '../../../layout/header/header';
import './login.css';
// const googleIcon=require()
const Login = () => {
    const { register,handleSubmit } = useForm({
        mode: "onBlur"
      });
    
      const {
        register: register2,
        handleSubmit: handleSubmit2
      } = useForm({
        mode: "onBlur"
      });
    const history = useHistory();
    let { token } = useParams();
    
    const verifiedToken =useCallback(
        () => {
            if (token) {
                axios.post(`${process.env.REACT_APP_API_URL}/auth/activate`, { token: token }).then(res => {
                    if (res.data.status === 200) {
                        toast.success(res.data.message);
                    } else {
                        toast.error(res.data.message);
                    }
                }).catch(err => {
                    toast.error(err);
                    console.log(err)
                })
            }
        },
        [token],
    );

    useEffect(() => {
        verifiedToken();
        if (isAuthenticate()) {
            history.push('/profile');
        }
    }, [verifiedToken,history]);


    const loginSubmit = (data) => {
        if (data) {
            axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, data).then(res => {
                if (res.data.status === 200) {
                    setAuthneticate(res.data.access_token, res.data.user);
                    if (isAuthenticate()) {
                        history.push('/profile');
                        toast.success(res.data.message)
                    } else {
                        toast.error('Authenicate Failled!')
                    }
                } else {
                    toast.error(res.data.message);
                }
            }).catch(err => {
                toast.error(err)
            })
        }
    }

   const forgetPassword=(data)=>{
      if(data){
          axios.post(`${process.env.REACT_APP_API_URL}/auth/forgetPassword`,data).then(result=>{
              console.log(result)
             if(result.data.status===200){
                toast.success(result.data.message)
             }else{
                 toast.error(result.data.message)
             }
          }).catch(err=>{
              toast.error(err);
          })
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
                        <Link className="link ml-auto mr-auto" to="/signup"> SIGN UP</Link>
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
                                <h3 className="register-heading">LOGIN</h3>

                                <div className="row register-form">
                                    <div className="col-md-6 col-sm-10 m-auto">
                                        <form key={1} onSubmit={handleSubmit(loginSubmit)} style={{ width: "100%" }}>

                                            <div className="form-group">
                                                <input type="text" className="form-control" autoComplete="new-email" required {...register('email')} placeholder="Email *" />
                                            </div>

                                            <div className="form-group">
                                                <input type="password" className="form-control" autoComplete="current-password" required {...register('password')} placeholder="Password *" />
                                            </div>
                                            <p><a id="forget-tab" data-toggle="tab" href="#forget" role="tab" aria-controls="forget" aria-selected="false" >Forget Password?</a></p>
                                            <input type="submit" className="btnRegister" value="Login" />
                                        </form>

                                    </div>
                                    <div className="col-md-12 col-sm-12 mt-4" style={{ textAlign: "center" }}>
                                        <hr align="left" width="30%" style={{ display: "inline-block", marginBottom: "0.4rem" }} />
                                        <p style={{ display: "initial", paddingLeft: "5px", paddingRight: "5px" }}>OR</p>
                                        <hr align="" width="30%" style={{ display: "inline-block", marginBottom: "0.4rem" }} />
                                    </div>
                                    <div className="col-md-12 text-center m-3" >
                                        <button style={{ paddinng: "10px", border: "2px solid #0062cc" }} type="button" className="btn btn-outline-primary">
                                            <img src="../../../../assets/images/search.svg" alt="google" style={{ width: "18px", height: "18px", margin: "5px 17px 5px 0px " }} />
                                            <p style={{ display: "initial", fontWeight: 500 }}>Sign In With Google</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show" id="forget" role="tabpanel" aria-labelledby="forget-tab">
                                <h3 className="register-heading">FORGET PASSWORD</h3>
                                <div className="row register-form">
                                    <div key={2} onSubmit={handleSubmit2(forgetPassword)}  className="col-md-6 col-sm-10 m-auto">
                                        <form style={{width:"100%"}}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" required {...register2('email')} autoComplete="current-email" placeholder="Email *" />
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


export default Login;