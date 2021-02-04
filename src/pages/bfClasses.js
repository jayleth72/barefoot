
import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"

const bfClasses = () => {
  return <Layout>Classes</Layout>
}

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

export default bfClasses
