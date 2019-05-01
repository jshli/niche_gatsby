import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TrackList from "../components/Tracks/Index"
import Button from "../components/Button"


const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <section className="hero">
        <div className="container grid-of-2">
            <div style={{
              alignSelf: "center"
            }}>
                <h1>Learn. Practice. Get Feedback. Grow.</h1>
                <p>Unhelpful feedback sucks. Master your VCE English skills with 150+ online lessons and exercises, where you'll get real feedback on your work as you progress</p>
                <p><b>Be one of the first to join Niche. Launching April 2019.</b></p>
                <Button primary={"true"} to="#">Sign Up Now</Button>
            </div>
            <div>
              <img 
              src="/images/laptop_girl.png"
              alt=""
              style={{
                width: "100%",
                maxWidth:"20rem",
                margin: "0 auto",
                display: "block"
              }}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="container text-center">
            <h2>Is this the sort of feedback you’re getting?</h2>
            <p>Don't worry, we've got your back. Each track is filled with hours of interactive content and exercises, where you'll get personalised, in-depth feedback from VCE English experts. Which one will you choose first?</p>
              <TrackList 
              tracks={data.allContentfulTracks}
              />
            <p>...and more coming soon!</p>
          </div>
        </section>
        <section>
          <div className="container"> 
            <h2>How Niche works</h2>
            <p>Learning through Niche allows you to master the skills you'll need to ace your VCE English, at your own pace.</p>
          </div>
          <div className="container"> 
          <div className="container">
            <div className="img-clmn">
              {/* <img class="how-it-works__img" src="<%=image_path("5c5699370464304a47b18244_how-step-2-aa9d08a7873f6137fb875bf1e72e4292eb549f76670498e569383103ae9799ef.png")%>" alt=""> */}
            </div>
            <div>
              <h3>1. Choose the skills you want to learn</h3>
              <p>Writing introductions. Essay structuring. Performing under exam conditions. From foundations to advanced techniques, pick from hours worth of courses to learn from!</p>
            </div>
          </div>
          <div className="container--grid2 content-grid">
            <div className="sign-in--clmn">
              <h3>2. Complete exercises, get real feedback</h3>
              <p>We know how important it is to get in-depth feedback. Complete exercises, and get real feedback from English experts that'll help you improve.</p>
            </div>
            <div className="img-clmn">
              {/* <img className="how-it-works__img" src= "<%=image_path("5c569a0d4ed7967936f0740f_how-step-3-cdf396c1da68deb92f387de5d5e22001820630a09edabb819ad918d8768d912a.png")%>" alt=""> */}
            </div>
          </div>
          <div className="container--grid2 content-grid">
            <div className="img-clmn">
              {/* <img className="how-it-works__img" src="<%=image_path("5c569ad84ed7967443f0742e_how-step-5-615a85bcf66919966c5bf088c09d6c482f4e421122958f755bab87fea49e9c8b.png")%>" alt=""> */}
            </div>
            <div className="sign-in--clmn">
              <h3>3. Complete courses and become a more confident English student!</h3>
              <p>With each course you complete and each skill you master, see yourself improve, and become a more confident and competent student.</p>
            </div>
          </div>
          </div>
        </section>
        <section>
        <div className='container'>
            <h2 className="section__header">One price. Unlimited courses. Unlimited feedback.</h2>
            <p className="section__subtitle">With Niche, you get access to professionally designed and developed education as well as feedback from elite level tutors for just $19 a month. That’s less than a brunch a month!</p>
            {/* <img className="graph-img" src="<%=image_path("niche pricing graph.svg")%>" alt=""> */}
        </div>
        </section>
        <section className="section--grey">
          <div className="container container--flex-center">
            <h2 className="section__header">Don't let what you don't know get in the way</h2>
            <p className="section__subtitle">Niche is launching limited beta positions in March 2019. Join now and be the first to get an edge.</p>
            <Button primary={"true"} to="#">Sign Up Now</Button>
          </div>
        </section>
        <footer>

        </footer>
  </Layout>
)

export const pageQuery = graphql`
  query HomeQuery {
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

export default IndexPage
