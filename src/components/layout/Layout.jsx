import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col bg-white text-navy-600">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
