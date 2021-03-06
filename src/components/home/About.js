import React , { useState } from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "feet.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const About = ({children}) => {
  const { aboutImage } = useStaticQuery(getAbout)
  
   return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="A collection of feet"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>The Garden Homeschool Story</h4>
          <p>
            Building a child's sense of "Belonging" to a meaningful and
            nurturing Community so they feel hope of "Becoming" a valued,
            influential and passionate member of our Society.
          </p>
		  
		  {children}
		 
        </article>
      </div>
    </section>
  )
}

export default About
