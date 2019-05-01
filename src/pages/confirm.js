import React from "react"
import GoTrue from "gotrue-js"

const auth = new GoTrue({
    APIUrl: "https://niche.netlify.com/.netlify/identity",
    audience: "",
    setCookie: false
})





export default class Confirm extends React.Component{
    componentDidMount() {
        if (window.location.hash && window.location.hash.indexOf('#confirmation_token') === 0) {
            const token = window.location.hash.split("=")[1]
            auth
            .confirm(token)
            .then(response => console.log("confirmed", response))
            .catch(error => console.log("error", error))
        }
    }
    render() {

        return (
            <div>confirm</div>
        )
    }
}