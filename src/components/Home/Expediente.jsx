import * as React from "react"
import ausencias from "../../../static/img/page_index_ausencias.png"
import blog from "../../../static/img/page_index_blog.png"
import evaluations from "../../../static/img/page_index_evaluations.png"
import expediente from "../../../static/img/page_index_expediente.png"
import puestos from "../../../static/img/page_index_puestos.png"
import vacations from "../../../static/img/page_index_vacations.png"

export function Expediente() {
  return (
    <div
      className="container-fluid page-index"
      id="page-index-features-wrapper"
    >
      <div className="row">
        <div className="col-xs-12">
          <div className="container">
            <div className="row page-index-feature two-column-flex">
              <div className="col-sm-5 col-xs-12 page-index-features-image">
                <img src={expediente} className="screenshot" alt="" />
              </div>
              <div className="col-sm-7 col-xs-12 page-index-features-text">
                <h2>Expediente Digital</h2>
                <p>
                  e control de todos los documentos de los colaboradores de
                  forma fácil y segura.
                </p>
                <p>
                  es crear carpetas públicas para información que debe rse, y
                  carpetas privadas para información de cada colaborador.
                </p>
              </div>
            </div>

            <div className="row page-index-feature two-column-flex-reverse-wrap">
              <div className="col-sm-7 col-xs-12 page-index-features-text">
                <h2>Control de vacaciones y días de asueto</h2>
                <p>
                  Cálculo del número de días acumulados y registro de los días
                  gozados, así como el número de días de asueto.
                </p>
                <p>
                  Todo el ciclo de solicitud y aprobación se realiza en línea,
                  ahorrando tiempo y dando visibilidad.
                </p>
              </div>
              <div className="col-sm-5 col-xs-12 page-index-features-image">
                <img src={ausencias} className="screenshot" alt="" />
              </div>
            </div>

            <div className="row page-index-feature two-column-flex">
              <div className="col-sm-5 col-xs-12 page-index-features-image">
                <img src={vacations} className="screenshot" alt="" />
              </div>
              <div className="col-sm-7 col-xs-12 page-index-features-text">
                <h2>Control de ausencias e incapacidades</h2>
                <p>
                  Permite registrar ausencias e incapacidades y subir documentos
                  relacionados (como justificantes médicos).
                </p>
                <p>
                  e personalizar y parametrizar los motivos de ausencia os,
                  definir un máximo de días al año que se pueden disfrutar, y
                  definir si son con o sin goce de salario.
                </p>
              </div>
            </div>

            <div className="row page-index-feature two-column-flex-reverse-wrap">
              <div className="col-sm-7 col-xs-12 page-index-features-text">
                <h2>Evaluación de desempeño</h2>
                <p>
                  Cree y aplique evaluaciones de desempeño.Lleve un registro
                  sultados, acciones correctivas, y sus resultados históricos.
                </p>
                <p>
                  Puedes asignar a una o más personas como evaluadoras ndo a la
                  persona evaluada), e indicar la ponderación de cada evaluador
                  en el resultado final.
                </p>
              </div>
              <div className="col-sm-5 col-xs-12 page-index-features-image">
                <img src={evaluations} className="screenshot" alt="" />
              </div>
            </div>

            <div className="row page-index-feature two-column-flex">
              <div className="col-sm-6 col-xs-12 page-index-features-image">
                <img src={blog} className="screenshot" alt="" />
              </div>
              <div className="col-sm-6 col-xs-12 page-index-features-text">
                <h2>Blog de comunicación interna</h2>
                <p>
                  arta información de interés a todos los colaboradores.
                  icaciones pueden tener cualquier tamaño, y puedes incluir
                  imágenes para ilustrar el texto.
                </p>
                <p>
                  es escoger enviarle una notificación por correo ico a todos
                  los colaboradores cuando haces una publicación nueva.
                </p>
              </div>
            </div>

            <div className="row page-index-feature two-column-flex-reverse-wrap">
              <div className="col-sm-7 col-xs-12 page-index-features-text">
                <h2>Documentación de puestos</h2>
                <p>
                  Crea más transparencia al documentar los requisitos y
                  responsabilidades de cada puesto.
                </p>
              </div>
              <div className="col-sm-5 col-xs-12 page-index-features-image">
                <img src={puestos} className="screenshot" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
