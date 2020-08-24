import React from "react"
import Image from "gatsby-image"
import styles from "../../css/program.module.css"
import { GrWorkshop } from "react-icons/gr"
import AniLink from "gatsby-plugin-transition-link"

const Program = ({ program }) => {
  const { programName, shortDescription, startDate, images } = program
  let mainImage = images[0].fluid

  return (
    <article className={styles.program}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="featured program image"
        />
        <AniLink
          paintDrip
          hex="#222"
          className={styles.link}
          to={`/Programs/${shortDescription}`}
        >
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <h4 className={styles.workout}>
            <GrWorkshop className={styles.icon} />
            {programName}
          </h4>
          <div className={styles.details}>
            <h6>{shortDescription}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Program
