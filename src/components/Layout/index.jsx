import * as React from "react"
import { Helmet } from "react-helmet"
import { WhatsAppButton } from "../WhatsAppButton"
import { Footer } from "./Footer"
import { Header } from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet
        link={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap",
          },
        ]}
        script={[
          {
            src: "https://kit.fontawesome.com/2652e08e83.js",
            crossorigin: "anonymous",
          },
        ]}
      />

      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>

      <WhatsAppButton />
    </>
  )
}

export default Layout
