import React from "react"
import ProgramList from "./ProgramList"
import { useStaticQuery, graphql } from "gatsby"
import ComingSoon from '../home/ComingSoon'

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
  // return <ProgramList programs={programList} />
  return <ComingSoon comingSoonText="New online classes coming soon" />
}

export default Programs
