import { graphql } from "gatsby"
import * as React from "react"
import entrepreneurs from "../../static/img/entrepreneurs.png"
// import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        {/* <Bio /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <Bio /> */}

      <div className="container-fluid page-index" id="page-index-maincta">
        <div className="row">
          <div className="col-xs-12">
            <div className="container">
              <div className="row two-column-flex">
                <div className="col-md-7 col-sm-8 col-xs-12">
                  <h1>
                    Está a un paso de <span>modernizar</span> su departamento de
                    RRHH
                  </h1>
                  <p>
                    Simplemente llene el siguiente formulario y nos pondremos en
                    contacto con usted para iniciar su periodo de prueba!
                  </p>

                  <form
                    method="POST"
                    action="https://zippyhr.com/buypost"
                    accept-charset="UTF-8"
                  >
                    <input
                      name="_token"
                      type="hidden"
                      value="Xpf41pLUXSTtFAMO6ivKKfj0Ty4LrrTA21DLZQJq"
                    />
                    <div className="form-group">
                      <label>
                        Su nombre <span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control pl-5"
                        placeholder="Nombre"
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Su correo electrónico{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control pl-5"
                        placeholder="Correo electrónico"
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Empresa<span className="text-danger">*</span>
                      </label>
                      <input
                        name="empresa"
                        id="empresa"
                        type="text"
                        className="form-control pl-5"
                        placeholder="Empresa"
                      />
                    </div>

                    <div className="form-group">
                      <label>Su teléfono</label>
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        className="form-control pl-5"
                        placeholder="Teléfono"
                      />
                    </div>

                    <div className="form-group">
                      <label>Plan solicitado</label>
                      <select
                        name="plan"
                        className="form-control custom-select"
                        id=""
                      >
                        <option>Básico</option>
                        <option>Plus</option>
                        <option>Premium</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Comentarios adicionales</label>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control pl-5"
                        placeholder="Comentarios adicionales"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn btn-primary btn-lg"
                    >
                      Enviar!
                    </button>
                  </form>
                </div>
                <div className="col-md-5 col-sm-4 hidden-xs">
                  <img src={entrepreneurs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
