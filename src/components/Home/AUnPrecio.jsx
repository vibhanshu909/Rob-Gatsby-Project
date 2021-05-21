import * as React from "react"

export function AUnPrecio() {
  return (
    <div className="container page-index page-index-pricing">
      <div className="row">
        <div className="col-sm-12">
          <h2>A un precio que su empresa sí puede pagar</h2>
        </div>
      </div>

      <div className="row" id="page-index-pricing-tiers">
        <div className="col-sm-4 col-sm-offset-1 col-xs-12">
          <h4>
            <span>$1 USD</span>por usuario por mes<sup>1</sup>
          </h4>
          <p className="page-index-pricing-tiers-fine-print">
            <sup>1</sup>Mínimo de $50.Precio más IVA.
          </p>
        </div>
        <div className="col-sm-5 col-xs-12">
          <div>
            <h3>Con acceso a todos los módulos actuales</h3>
            <ul>
              <li>Control de vacaciones y días de asueto</li>
              <li>Control de asistencia e incapacidades</li>
              <li>Expediente digital</li>
              <li>Evaluación de desempeño</li>
              <li>Documentación de puestos</li>
              <li>Blog de comunicación interna</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
