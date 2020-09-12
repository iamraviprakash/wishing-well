require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "Wishing Well"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN }
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "NDI2MzRkMjItMGU1ZS00OWUzLTg0OWUtYzI2N2IzYjc5YzY1NjM3MzUxMzAxMDg0MTEzODE1",
        autopop: true
      }
    }
  ]
};
