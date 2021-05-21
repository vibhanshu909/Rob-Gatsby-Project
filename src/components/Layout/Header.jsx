import * as React from "react"

export function Header() {
  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-xs-4 col-sm-4">
                <a href="/">
                  <img
                    id="logo"
                    src="https://zippyhr.com/img/zippyhr.png"
                    alt="ZippyHR"
                    title="ZippyHR"
                  />
                </a>
              </div>
              <div className="col-xs-8 col-sm-8">
                <ul>
                  <li>
                    <a href="https://zippyhr.com/user/login" className="">
                      Ingresar
                    </a>
                  </li>

                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
