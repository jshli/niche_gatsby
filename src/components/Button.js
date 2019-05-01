import styled from "styled-components"
import { Link }  from "gatsby"

const Button = styled(Link)`
    border-radius: 100px;
    color: ${props => props.primary ? "white" : "#2d4b59"};
    background-color: ${props => props.primary ? "#2d4b59": "white"};
    border: 2px solid #2d4b59;
    padding: ${props => props.small ?  "1rem 2rem": "1.25rem 2rem"};
    text-decoration: none !important;
    display: inline-block;
`

export default Button