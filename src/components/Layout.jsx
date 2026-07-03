import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { CartDrawer } from "./CartDrawer"
import { Toaster } from "sonner"

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" toastOptions={{ className: "font-sans" }} />
    </div>
  )
}
