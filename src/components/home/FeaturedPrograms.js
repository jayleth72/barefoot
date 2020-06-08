import React from "react"
import Program from "../Programs/Program"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getPrograms = graphql`
  query {
    featuredPrograms: allContentfulProgram(
      filter: { featuredProgram: { eq: true } }
    ) {
      edges {
        node {
          programName
          shortDescription
          startDate
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedPrograms = () => {
  const response = useStaticQuery(getPrograms)
  const programs = response.featuredPrograms.edges

  return (
    <section className={styles.programs}>
      <Title title="featured" subtitle="programs" />
      hello from featured tours
      <div className={styles.center}>
        {programs.map(({ node }) => {
          return <Program key={node.contentful_id} program={node} />
        })}
      </div>
      <AniLink fade to="/programs" className="btn-primary">
        All Programs
      </AniLink>
    </section>
  )
}

export default FeaturedPrograms
