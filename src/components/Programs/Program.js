import React from "react"
import Image from "gatsby-image"
import styles from "../../css/program.module.css"
import { BsPeopleCircle } from "react-icons/bs"
import AniLink from "gatsby-plugin-transition-link"

const Program = ({ program }) => {
    const { programNam, shortDescription, startDate, images } = program
    let mainImage = images[0].fluid

    return (
        <article className={styles.program}>
            <div className={styles.imgContainer}>
                <Image
                    fluid={mainImage}
                    className={styles.img}
                    alt="featured program image"
                />
                <AniLink paintDrip hex="#222" className={styles.link} to={`/Programs/${shortDescription}`}>
                    details
        </AniLink>
            </div>
        </article>
    )
}

export default Program

