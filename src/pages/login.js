import React from "react"
import GoTrue from "gotrue-js"
import { navigate } from "gatsby"

import StyledForm from "../components/Form/Index"


const auth = new GoTrue({
    APIUrl: "https://niche.netlify.com/.netlify/identity",
    audience: "",
    setCookie: false
})

export default class Login extends React.Component {
    state={
        email:"",
        password:""
    }

    
    
handleSubmit = e => {
    e.preventDefault()
    auth.login(this.state.email, this.state.password)
    .then(response => console.log(response, "Success, logged in"))
    .then(navigate("/dashboard"))
    .catch(error => console.log("Error", error))
}

handleChange = e => {
    this.setState({
        [e.target.name]:e.target.value
    })
}

render () {
    return (
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
        )
    }
}

