import React from "react"
import { navigate } from "gatsby"
import { login } from "../utils/auth"

import Layout from "../components/layout"
import StyledForm from "../components/Form/Index"


export default class Login extends React.Component {
    state={
        email:"",
        password:""
    }

    
    
handleSubmit = e => {
    e.preventDefault()
    login(this.state.email, this.state.password)
}

handleChange = e => {
    this.setState({
        [e.target.name]:e.target.value
    })
}

render () {
    return (
        <Layout>
            <section className="section--full">
                <div className="container grid-of-2">
                    <div className="sign-in--clmn">
                        
                    </div>
                    <div className="sign-in--clmn">
                        <h2>Oh hey there. Welcome back!</h2>
                        <p>Ready to dive back in? Let's get you signed back in.</p>
                        <p>Don't have an account yet? Sign up <a href="/create-account">here.</a></p>
                        <StyledForm onSubmit={this.handleSubmit}>
                            <StyledForm.Label>Email Address</StyledForm.Label>
                            <StyledForm.Input  type="email" name="email" onChange={this.handleChange} required/>
                            <StyledForm.Label>Password</StyledForm.Label>
                            <StyledForm.Input type="password" name="password" onChange={this.handleChange} required/>  
                            <StyledForm.Btn>Create Account</StyledForm.Btn>
                        </StyledForm>
                    </div>
                </div>
            </section>
        </Layout>
        )
    }
}

