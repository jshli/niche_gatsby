import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Button from "./Button"

const Nav = styled.div`
    position: absolute;
    top: 0;
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
`

const Navbar= ({data}) => {
    return (
    <Nav>
        <Container>
            <div>
                <Link to="/">
                    <img 
                    src="/images/niche_logo.svg"
                    style={{
                        width: "100px"
                    }}
                    />
                 
                </Link>
            </div>
            <div>
                <Link to="/login">
                    Login
                </Link>
                <Button to="/signup">
                    Sign up
                </Button>
            </div>
        </Container>
    </Nav>
    )
}

// import blah from '../../images/niche_logo'


export default Navbar