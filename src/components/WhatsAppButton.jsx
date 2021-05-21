import * as React from "react"
import whatsapp from "../../static/img/whatsapp.png"

export function WhatsAppButton() {
  return (
    <div id="whatsappbutton">
      <h3>
        <a
          href="https://wa.me/34656888709"
          target="_blank"
          rel="nofollow noopener"
        >
          Preguntas?
          <br />
          Contáctenos
          <br />
          por Whatsapp!
        </a>
      </h3>
      <a
        href="https://wa.me/34656888709"
        target="_blank"
        rel="nofollow noopener"
      >
        <img src={whatsapp} />
      </a>
    </div>
  )
}
