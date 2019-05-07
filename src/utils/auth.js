import GoTrue from "gotrue-js"
import { navigate } from "gatsby"

const auth = new GoTrue({
    APIUrl: "https://niche.netlify.com/.netlify/identity",
    audience: ""
})


export const getCurrentUser = () => {
    auth.currentUser();
}

export const login = (email, password) => {
    auth.login(email, password, true)
    .then(response => {
        console.log(response, "Success, logged in")
        navigate('/app/dashboard')

    })
    .catch(error => {
        console.log("Error", error)
        navigate('/login')
    })
}

export const confirmUser = () => {
    if (window.location.hash && window.location.hash.indexOf('#confirmation_token') === 0) {
        const token = window.location.hash.split("=")[1]
        auth
        .confirm(token, true)
        .then(response => console.log("confirmed", response))
        .catch(error => console.log("error", error))
    }
}

export const signUpUser = (email, password) => {
    auth
    .signup(email, password)
    .then(response => {
        console.log("Success, sign up.", response)
        navigate('/login')
    })
    .catch(error => {
        console.log("error", error)
        navigate(`/signup`)
    })
}

export const isLoggedIn = () => {

    const user = auth.currentUser()
    return !!user
}