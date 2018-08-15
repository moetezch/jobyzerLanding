module.exports = {
  siteMetadata: {
    title: 'Jobyzer : Your best job tracker and analyzer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-122171355-2",
      }
    },
     {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://jobyzer.us19.list-manage.com/subscribe/post?u=230ef91315833f1e0df75af48&amp;id=ccb012345e', // see instructions section below
      },
    }
  ],
}

