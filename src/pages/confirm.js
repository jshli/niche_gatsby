import React from "react"
import GoTrue from "gotrue-js"

const auth = new GoTrue({
    APIUrl: "https://niche.netlify.com/.netlify/identity",
    audience: "",
    setCookie: false
})

if (window.location.hash && window.location.hash.indexOf('#confirmation_token') === 0) {
    const token = window.location.hash.split("=")[1]
    auth
    .confirm(token)
    .then(response => console.log("confirmed", response))
    .catch(error => console.log("error", error))
}


export default function Confirm(props) {
    return (
        <div>confirm</div>
    )
}