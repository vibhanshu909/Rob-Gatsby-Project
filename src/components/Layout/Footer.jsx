import * as React from "react"

export function Footer() {
  return (
    <div className="container-fluid page-index page-index-footer">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <img src="https://zippyhr.com/img/zippyhr.png" />
              <p>Su oficina de recursos humanos a un clic de distancia.</p>
              <p>
                <a href="mailto:info@zippyhr.com">info@zippyhr.com</a>
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/getzippyhr/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/getzippyhr/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/zippyhr/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-3">
              <h3>ZippyHR!</h3>
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="/#funcionalidad">Funcionalidad</a>
                </li>
                <li>
                  <a href="/#precio">Precio</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-3">
              <h3>Iniciar prueba</h3>
              <ul>
                <li>
                  <a href="https://zippyhr.com/iniciar-prueba">
                    &iexcl;Iniciar prueba!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <p>Derechos Reservados CRB Techdev Solutions SA.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
