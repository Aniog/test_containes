import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CartDrawer } from "@/components/CartDrawer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
