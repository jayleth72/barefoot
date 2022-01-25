import React from "react"
import Program from "../Programs/Program"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ComingSoon from "./ComingSoon"

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
              ...GatsbyContentfulFluid
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
      <Title title="featured" subtitle="classes" />
       {/* <div className={styles.center}>
        {programs.map(({ node }) => {
          return <Program key={node.contentful_id} program={node} />
        })}
      </div> */}
      <ComingSoon ComingSoonText="New online classes coming soon" />
      <AniLink fade to="/programs" className="btn-primary">
        All Classes
      </AniLink>
    </section>
  )
}

export default FeaturedPrograms
