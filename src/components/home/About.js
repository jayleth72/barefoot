import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about barefoot homeschooling" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>The Barefoot Story</h4>
          <p>
            Building a child's sense of "Belonging" to a meaningful and
            nurturing Community so they feel hope of "Becoming" a valued,
            influential and passionate member of our Society.
          </p>
          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
