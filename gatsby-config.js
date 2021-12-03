require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-react-helmet",

    // styling
    "gatsby-plugin-sass",

    // images
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // scrollTo (animated scrolling to different sections)
    "gatsby-plugin-smoothscroll",
    
    // filesystem resources (ex: images)
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    // google analytics (https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/)
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GA, // Google Analytics / GA
        ],
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};
