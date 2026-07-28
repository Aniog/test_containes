import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
