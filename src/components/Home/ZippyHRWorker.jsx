import * as React from "react"
import zippyhrworker from "../../../static/img/zippyhrworker.png"

export const ZippyHRWorker = () => {
  return (
    <div className="container-fluid page-index" id="page-index-maincta">
      <div className="row">
        <div className="col-xs-12">
          <div className="container">
            <div className="row two-column-flex">
              <div className="col-md-7 col-sm-8 col-xs-12">
                <h1>
                  Ahorre <span>tiempo</span> y <span>dinero</span> automatizando
                  los procesos operativos del departamento de RRHH
                </h1>
                <p>
                  ZippyHR automatiza todos los procesos operativos del
                  departamento de recursos humanos para que usted se dedique a
                  crear valor para sus empleados. Todo de forma simple, segura,
                  y según las leyes de Costa Rica. 🇨🇷
                </p>

                <a
                  href="/iniciar-prueba"
                  id="page-index-maincta-link"
                  className="btn btn-primary btn-lg"
                >
                  &iexcl;Inicie su prueba!
                </a>
              </div>
              <div className="col-md-5 col-sm-4 col-xs-12">
                <img src={zippyhrworker} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
