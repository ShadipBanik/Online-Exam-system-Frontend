import React from 'react'
import { withRouter } from 'react-router'
import Header from '../../../layout/header/header'

const Profile =()=>{
    return(
        <div>
        <Header/>
        <h1>Welcome to profile</h1>
        </div>
    )
}

export default withRouter(Profile);