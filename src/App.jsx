import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Products from "@/components/sections/Products"
import Capabilities from "@/components/sections/Capabilities"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import "./App.css"

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-mist">
      <Header />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
