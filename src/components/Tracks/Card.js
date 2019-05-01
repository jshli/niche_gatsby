import React, { useState, useEffect } from "react"
import styled from "styled-components"

import CategoryPip from "./CategoryPip"

import Modal from "./Modal"
// import CategoryPip from "./Elements/CategoryPip"

export default function TrackCard(props) {
    const [modalOpen, setModalOpen] = useState(false)
    const [totalTime, setTotalTime] = useState(null)
    const [isEnrolled, setIsEnrolled] = useState(false)
    const [enrollments, setEnrollments] = useState(props.enrollments)


    const Card = styled.div`
        border-radius: 30px;
        overflow: hidden;
        display: flex;
        text-align: left;
        flex-direction: column;
        cursor: ${!modalOpen ? "pointer":"default"};
        transition: all 0.3s ease;
        justify-content: space-between;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        height: 100%;
        &:hover {
            box-shadow: 0 10px 20px rgba(0,0,0,0.25)
        }
    `
    const DetailsWrap = styled.div`
        margin: 2rem;
    `

    const SmallDetailsWrap = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        >p {
            margin-bottom: 0;
        }
    `

    const Button = styled.button`
        width: 100%;
        padding: 1.5rem 0;
        color:white;
        border:none;
        font-weight: bold;
        background-color:${props => props.enrolled ? '#2D4B59' : '#55BC90'};
        margin-top: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all ease 0.5s;
    `


    const handleClick = () => {
        if (!modalOpen) {
            setModalOpen(true)
        }
    }
    
    const closeModal = () => {
        setModalOpen(false)
    }


    const convertTime = mins => {
        const hours = mins / 60
        const rest = mins % 60
        return `${Math.floor(hours)}h ${rest}mins`
    }

    
    // useEffect(() => {
        //     setTotalTime(units.length > 0 ?
        //         convertTime(units
        //             .map(unit => unit.length)
        //             .reduce((acc, val) => acc + val)
        //         )
        //         :
        //         ""
        // )})
        
        useEffect(() => {
            if (enrollments) {
                enrollments.filter(enrollment => enrollment.trackId === id).length > 0 ? setIsEnrolled(true) : setIsEnrolled(false)
            }
        },[])
        
        const updateEnrollments = id => {
            setEnrollments([...enrollments, id])
            setIsEnrolled(true)
        }
        
    const { user, id, name, trackCategory, units, description, dateAvailable } = props
    return (
        <Card 
        onClick={handleClick}>
            {modalOpen ? 
            <Modal
            // user={user}
            id={id} 
            name={name}
            description={description}
            trackCategory={trackCategory}
            // totalTime = {totalTime}
            closeModal={closeModal}
            isEnrolled={isEnrolled}
            // enrollments={enrollments}
            // updateEnrollments={updateEnrollments}
            /> : 
            null}
            <DetailsWrap> 
                <SmallDetailsWrap>
                    <CategoryPip>{trackCategory}</CategoryPip>
                    {/* {
                        totalTime ?
                    <p>
                    <i className="far fa-clock"></i> {totalTime}
                    </p>
                    :
                    null
                    } */}
                </SmallDetailsWrap>   
                <h3>{name}</h3>
                <p>{description}</p>
                <p style={{color: "grey"}}>Available {dateAvailable}</p>
            </DetailsWrap>
            
        </Card>
    )
}