import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

export default function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname, location.hash])

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
