import React from "react"
import styled from "styled-components"

import Button from "../../components/Button"
import Card from "./Card"


const Tracks = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
`

export default function TracksList(props) {
    return (
    <Tracks>
        {props.tracks ? 
        props.tracks.nodes.map((track) => {
            return (
                <Card 
                id={track.id}
                key={track.id}
                name={track.name}
                description={track.description}
                trackCategory={track.category.name}
                dateAvailable={track.dateAvailable}
                />
            )
        })   
        :
        <div>
            <p>Hmm no tracks here. Would you like to pick some?</p>
            <Button>See all tracks</Button>
        </div>
    }
    </Tracks>
    )
}