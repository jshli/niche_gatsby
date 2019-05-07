import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import {FaTimes} from "react-icons/fa"
import CategoryPip from "./CategoryPip"
import Button from "../Button"

const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 70vh;
    width: 80%;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
    margin: auto auto;
    background: white;
    border-radius: 10px;
    -webkit-backdrop-filter: blur(50px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    padding: 4rem 3rem;
    position: relative;
`

const CloseBtn = styled.a`
    text-decoration: none;
    color: black;
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
    &:hover {
        text-decoration: none;
    }
`

const Overlay = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 5;
    left: 0;
    top: 0;
    background-color: rgba(255, 255, 255,0.5);
`

const LessonList = styled.div`
    overflow: scroll;
    >i {
        width: 1rem;
    }
`

const LessonItem = styled.p`
    margin-bottom: 0.5rem;
    color: #495456;
`

const getIcon = contentType => {
    switch(contentType) {
        case "Document" :
        return (`far fa-file-alt`)
        case "Video":
        return ("far fa-play-circle")
        case "Exercise":
        return ("far fa-edit")
    }
}


export default function Modal(props) {

    const handleClick = event => {
        if (event.target.id==="overlay"){
            props.closeModal()
        } else {
            return
        }
    }
    
    const data = useStaticQuery (
        graphql`
        query {
            allContentfulLessons {
                nodes {
                    orderNum
                    description{
                    description
                    }
                    units {
                        id
                        name
                        order
                        type
                        length
                    }
                    track {
                    id
                    }
                    
                }
            }
        }
    `
    )
    const { id, name, trackCategory } = props
    console.log(data)
    const lessons = data.allContentfulLessons.nodes.filter(lessons => lessons.track.id === props.id).sort((a,b) =>a.orderNum - b.orderNum)
    return (
        <Overlay onClick={handleClick} id="overlay">
            <Box>
            <CloseBtn onClick={props.closeModal}><FaTimes/></CloseBtn>
            <div>
                <h2>{name}</h2>
                <p><i class="far fa-clock"></i> {props.totalTime}</p>
                <p>{props.description}</p>
                <CategoryPip>{trackCategory}</CategoryPip>
                <div>
                <Button 
                // isEnrolled={props.isEnrolled} 
                user={props.user} 
                id={props.id}
                // updateEnrollments={props.updateEnrollments}
                primary={"true"}
                small={"true"}
                style={{marginTop: "2rem"}}
                > Enroll </Button>
                </div>
            </div>
            <LessonList>
                {lessons.map(({ id, description, orderNum, units }) => (
                    <div key={id}>
                        <h3>{`Lesson ${orderNum}: ${description.description}`}</h3>
                        {/* <p>Estimated time to completion: {units.length > 0 ? units.map(unit => unit.length).reduce((acc, val) => acc + val): "0"} mins</p> */}
                        {units ? units.map(({id, name, order, type, length})=> (
                            <LessonItem key={id}><i class={`${getIcon(type)}`}></i>{` ${orderNum}.${order}: ${name} (${length} mins)`}</LessonItem>
                        )) : ""}

                    </div>

                ))}
            </LessonList>
            </Box>
        </Overlay>
    )

}

