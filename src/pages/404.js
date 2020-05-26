import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oopsy daisy, that page doesn't exist">
          <AniLink fade to="/" className="btn-white">
            Go back home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
