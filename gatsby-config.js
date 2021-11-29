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
  ],
};
