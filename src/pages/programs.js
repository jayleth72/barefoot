import React, { Component } from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Programs from "../components/Programs/Programs"

export default class programs extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        <Programs />
      </Layout>
    )

  }
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
