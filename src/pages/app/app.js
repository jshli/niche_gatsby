import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../../components/privateRoute";
import Dashboard from "./dashboard"

const App = () => (
    <Router>
        <PrivateRoute path="/app/dashboard" component={Dashboard} />
    </Router>

)

export default App