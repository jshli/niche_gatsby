import React from "react"
import {graphql} from "gatsby"

import TrackList from "../../components/Tracks/Index"

const Dashboard = ({data}) => (
    <div>
        <div className="section">
            <div className="container">
                <h2>My Tracks</h2>
            </div>
        </div>
        <div className="section">
            <div className="container"></div>
            <h2>All tracks</h2>
            <TrackList 
                tracks={data.allContentfulTracks}
            />
        </div>
    </div>
        
)

export const query = graphql`
  query dashboardQuery {
    allContentfulTracks{
      nodes{
        id
        name
        description
        dateAvailable(formatString: "MMMM, YYYY")
        category {
          name
        }
      }
    }
  }
`

export default Dashboard