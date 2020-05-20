import React from "react"
import Layout from "../components/Layout"
import Simplehero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/home/Services"

export default () => (
  <Layout>
    <Simplehero>
      <Banner
        title="Be Inspired"
        info="Creative and applied learning support for homeschooling"
      >
        <Link to="/about" className="btn-white">
          Learn More
        </Link>
      </Banner>
    </Simplehero>
    <About />
    <Services />
  </Layout>
)
