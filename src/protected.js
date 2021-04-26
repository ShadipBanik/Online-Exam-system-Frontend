import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { isAuthenticate } from './middleware/authcheck';

const Protected=({component:Component,...rest})=>{
   return <Route {...rest} render={(props)=>{
           if(isAuthenticate()){
               return <Component  {...props} />
           }else{
               return (
                   <Redirect to="/login"/>
                )
           }
   
   }}
   />
}

export default Protected
