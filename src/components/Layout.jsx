import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Layout({ children }) {
  const mainRef = useRef(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, mainRef.current)
    })
    return () => {
      cancelAnimationFrame(frame)
      ImageHelper.disconnect(mainRef.current)
    }
  }, [children])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main ref={mainRef} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
