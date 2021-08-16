module.exports = {
    siteMetadata: {
        title: `Your Site Title`,
        description: `A description for your blazing fast site, using multiple themes!`,
        author: `Your name`,
        social: [{
                name: `Twitter`,
                url: `https://twitter.com/gatsbyjs`,
            },
            {
                name: `GitHub`,
                url: `https://github.com/gatsbyjs`,
            },
        ],
    },
    plugins: [{
            resolve: `gatsby-theme-blog`,
            options: {
                basePath: `/blog`,
            },
        },
        {
            resolve: `gatsby-theme-notes`,
            options: {
                basePath: `/notes`,
            },
        },
    ],
}