import { useEffect, useRef, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/layout/CartDrawer"
import { SearchOverlay } from "@/components/layout/SearchOverlay"

export default function Layout() {
  const containerRef = useRef(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [pathname, searchOpen])

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col">
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  )
}
