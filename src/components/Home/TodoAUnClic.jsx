import * as React from "react"
import devices from "../../../static/img/page_index_devices.png"

export function TodoAUnClic() {
  return (
    <div className="container-fluid page-index page-index-featureswrapper-wide">
      <div className="row">
        <div className="col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h3>Todo a un clic</h3>
                <h2>
                  Toda la funcionalidad del departamento, pero&nbsp;
                  <span className="zippy-color">en línea</span>.
                </h2>
              </div>
            </div>

            <div className="row two-column-flex">
              <div className="col-sm-offset-1 col-sm-5 col-xs-7">
                <ul>
                  <li>
                    <i className="fas fa-check"></i> Expediente digital.
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Control de vacaciones y
                    días de asueto.
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Control de asistencia e
                    incapacidades.
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Evaluación de desempeño.
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Documentación de puestos.
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Blog de comunicación
                    interna.
                  </li>
                </ul>
              </div>
              <div className="col-sm-5 col-xs-5">
                <img src={devices} className="screenshot" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
