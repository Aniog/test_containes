import { Outlet } from "react-router-dom"
import { Nav } from "./Nav"
import { Footer } from "./Footer"
import { CartDrawer } from "@/components/ui/CartDrawer"

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory-100 text-ink-500">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
