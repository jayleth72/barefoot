module.exports = {
  siteMetadata: {
    title: "Barefoot Homeschooling",
    description: "Homeschooling workshops, events and guidance",
    author: "jay.letheby@gmail.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
  ],
}
