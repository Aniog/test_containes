import { useLocation, Outlet, useMatch } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"

export default function Layout() {
  const location = useLocation()
  const onHome = useMatch({ path: "/", end: true })

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname, location.search])

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Navbar variant={onHome ? "auto" : "solid"} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
