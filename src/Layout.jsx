import { useEffect, useRef } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Layout() {
  const { pathname } = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [pathname])

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col bg-[#F5F7FA]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
