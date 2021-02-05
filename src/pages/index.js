import React, { useState } from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import About from "../components/home/About"
import Services from "../components/home/Services"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero" 
import FeaturedPrograms from "../components/home/FeaturedPrograms"

const index = ({ data }) => {
  const showReadMore = useState(true)
  return (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Learning with Nature by their side"
        info=""
      >
        <AniLink fade to="/about" className="btn-hero">
          Learn more
        </AniLink>
      </Banner>
    </StyledHero>
	<About showReadMore={showReadMore} />   
    <Services />
   
  </Layout>
	)
  }

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "gardenBcg1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default index