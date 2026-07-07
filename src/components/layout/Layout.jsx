import { Outlet, ScrollRestoration } from "react-router-dom"
import { StickyNav } from "@/components/layout/StickyNav"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/layout/CartDrawer"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-bone text-cocoa">
      <StickyNav />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
