import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutMe = ({ data }, location) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout title={siteTitle}>
            <SEO title="About me" keywords={['CV', "resume", "software developer", "mike lasby"]} />
        </Layout>
    )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
    <StaticQuery
        query={indexQuery}
        render={data => (
            <AboutMe location={props.location} data={data} {...props} />
        )}
    />
)
