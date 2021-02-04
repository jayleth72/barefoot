import React, {useState} from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import About from "../components/home/About"

const about_page = ({data}) => {
  const showReadMore = useState(false)	
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
	  <About showReadMore={showReadMore} />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default about_page