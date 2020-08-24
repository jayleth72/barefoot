import React from "react"
import ProgramList from "./ProgramList"
import { useStaticQuery, graphql } from "gatsby"

const getPrograms = graphql`
  query {
    programList: allContentfulProgram{
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

const Programs = () => {
  const { programList } = useStaticQuery(getPrograms)
  return <ProgramList programs={programList} />
}

export default Programs
