import styled from "styled-components"

const Input = styled.input`
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
    background: none;
    border: none;
    border-bottom: 1px solid #2d4b59;
    padding: 1rem;
    transition: all ease 0.3s;
    &:focus {
        outline: none;
        transform: scale(1.03);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        border-bottom: 1px solid #55bc90
    }
`

export default Input