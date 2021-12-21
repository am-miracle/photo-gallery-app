module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "PhotoGallery",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'gcms',
        url: 'https://api-eu-west-2.graphcms.com/v2/ckxcnz96d3srk01xi0skjbq9g/master',
      }
    },
  ],
};
