import { graphql } from "gatsby"
import * as React from "react"
import { AUnPrecio } from "../components/Home/AUnPrecio"
import { Expediente } from "../components/Home/Expediente"
import { QuéDicenDe } from "../components/Home/QuéDicenDe"
import { TodoAUnClic } from "../components/Home/TodoAUnClic"
import { Utilice } from "../components/Home/Utilice"
import { ZippyHRWorker } from "../components/Home/ZippyHRWorker"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <Bio /> */}

      <ZippyHRWorker />
      <a name="funcionalidad"></a>
      <TodoAUnClic />

      <Expediente />

      <QuéDicenDe />

      <a name="precio"></a>
      <AUnPrecio />

      <Utilice />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
