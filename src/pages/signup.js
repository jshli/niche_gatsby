import React from "react"
import _ from "lodash"
import GoTrue from "gotrue-js"
// import { Mutation } from "react-apollo"
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

import StyledForm from "../components/Form/Index"

// import createUser from "./Mutations/createUser"

// const client = new ApolloClient({
//     uri: "/graphql"
// });

const auth = new GoTrue({
    APIUrl: "https://niche.netlify.com/.netlify/identity",
    audience: "",
    setCookie: false
})

export default class Signup extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirm:""
    }

    // handleSubmit = (createUser) => {
    //     const { firstName, lastName, email, phone, password } = this.state;
    //     createUser({ variables: { first_name: firstName, last_name:lastName, email:email, phone_number:phone, password:password } });
    //     this.setState({ firstName: '', lastName: '', email: '', phone: "", password: "" });
    // }
    
    handleSubmit = e => {
        e.preventDefault()
        auth
        .signup(this.state.email, this.state.password)
        .then(response => console.log("Success, confirmation email sent", response))
        .catch(error => console.log("Error", error))
    }
    
    handleChange = e => {
        if (e.target.name.split("_").length > 1) {
            this.setState({
                [_.camelCase(e.target.name)]:e.target.value
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render () {

        return (
            // <ApolloProvider client={client}>
                // <Mutation
                //     mutation={createUser}
                //     >
                //     {(createUser, { data }) => (
            <section className="section--full">
                <div className="container grid-of-2">
                    <div className="sign-in--clmn">
                        {/* <img src="/images/3-e1b6245e2a342f5ff15eee4ed7999b1efc740c1a39f65d2fb61a5837a0673f1a.svg" alt=""> */}
                    </div>
                    <div className="sign-in--clmn">
                        <h2>Start learning the skills you need to succeed.</h2>
                        <p>Let’s get you set-up with a free Niche account, so you can start joining tracks you’re interested, and get early access when the platform launches.</p>
                        <p>Already have an account? Sign in <a href="/login">here.</a></p>
                    <StyledForm 
                    onSubmit={this.handleSubmit}
                    >
                        <StyledForm.InputWrap>
                            <div>
                                <StyledForm.Label>First Name</StyledForm.Label>
                                <StyledForm.Input  type="text" name="first_name" onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <StyledForm.Label>Last Name</StyledForm.Label>
                                <StyledForm.Input  type="text" name="last_name" onChange={this.handleChange} required/>
                            </div>
                        </StyledForm.InputWrap>
                        <StyledForm.InputWrap>
                            <div>
                                <StyledForm.Label>Email Address</StyledForm.Label>
                                <StyledForm.Input  type="email" name="email" onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <StyledForm.Label>Phone Number</StyledForm.Label>
                                <StyledForm.Input  type="tel" name="phone_number" onChange={this.handleChange} required/>
                            </div>
                        </StyledForm.InputWrap>
                        <StyledForm.InputWrap>
                            <div>
                                <StyledForm.Label>Password</StyledForm.Label>
                                <StyledForm.Input type="password" name="password" onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <StyledForm.Label>Confirm Password</StyledForm.Label>
                                <StyledForm.Input  type="password" require/>
                            </div>
                        </StyledForm.InputWrap>
                        <StyledForm.Btn>Create Account</StyledForm.Btn>
                    </StyledForm>
                    </div>
                </div>
            </section>

                    )}
        //         </Mutation>
        //     </ApolloProvider>
        // )
    // }

}