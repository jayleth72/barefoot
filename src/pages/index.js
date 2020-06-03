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
        info="Creative and applied learning support for homeschooling"
      >
        <AniLink fade to="/about" className="btn-white">
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
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
