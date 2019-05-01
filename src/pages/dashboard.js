import React from "react"
import GoTrue from "gotrue-js"

const auth = new GoTrue({
    APIUrl: "https://niche.netlify.com/.netlify/identity",
    audience: "",
    setCookie: false
})


export default function Dashboard(props){
    console.log(auth.currentUser())
    return (
        <div></div>
    )
}