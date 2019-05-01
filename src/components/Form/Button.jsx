import styled from "styled-components"

const Btn = styled.button`
    border-radius: 100px;
    color: white !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    background-color: #2d4b59;
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    display: inline-block;
    transition: all ease 0.5s;
    cursor: pointer;
    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.25)
    }
`
export default Btn