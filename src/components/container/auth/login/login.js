import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {
    return (
<div   className="container register">
                <div   className="row">
                    <div   className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <Link className="link" to="/signup"> SIGN UP</Link>
                    </div>
                    <div   className="col-md-9 register-right">

                        <div   className="tab-content" id="myTabContent">
                            <div   className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3   className="register-heading">LOGIN</h3>
                                <div   className="row register-form">
                                    <div   className="col-md-6 col-sm-10 m-auto">
                                        <div   className="form-group">
                                            <input type="text"   className="form-control" placeholder="Email *" value="" />
                                        </div>
                
                                        <div   className="form-group">
                                            <input type="password"   className="form-control" placeholder="Password *" value="" />
                                        </div>
          
                                    <input type="submit"   className="btnRegister"  value="Login"/>
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