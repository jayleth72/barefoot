import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import About from "../components/home/About"
import Services from "../components/home/Services"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import FeaturedPrograms from "../components/home/FeaturedPrograms"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Be Inspired"
        info="Learning with Nature by their side"
      >
        <AniLink fade to="/about" className="btn-hero">
          Learn more
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedPrograms />
  </Layout>
)

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
