module.exports = {
        siteMetadata: {
            siteUrl: "https://www.yourdomain.tld",
            title: "musicianblog",
        },
        plugins: [{
                resolve: "gatsby-source-sanity",
                options: {
                    projectId: "musicianblog",
                    dataset: "",
                },
            },
            "gatsby-plugin-sass",
            "gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-react-helmet",
            "gatsby-plugin-sitemap",
            {
                resolve: "gatsby-plugin-manifest",
                options: {
                    icon: "src/images/icon.png",
                },
            },
            "gatsby-plugin-mdx",
            "gatsby-plugin-sharp",
            "gatsby-transformer-sharp",
            {
                resolve: "gatsby-source-filesystem",
                options: {
                    name: "images",
                    path: "./src/",
                },
                __key: "images",
            },
            {
                resolve: "gatsby-source-filesystem",
                options: {
                    name: "pages",
                    path: "./src/pages/",
                },
                __key: "pages",
            },
            `gatsby-transformer-yaml`,
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    path: `./src/data/`, // location of yaml files
                },

                //   Add configuration themes here
                module.exports = {
                    plugins: [{
                            resolve: `gatsby-theme-notes`,
                            options: {
                                mdx: true,
                                basePath: `/notes`,
                            },
                        },
                        // with gatsby-plugin-theme-ui, the last theme in the config
                        // will override the theme-ui context from other themes
                        { resolve: `gatsby-theme-blog` },
                    ],
                    siteMetadata: {
                        title: `Shadowed Site Title`,
                    },
                }
            ],
        };