import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Products from "@/components/sections/Products"
import Features from "@/components/sections/Features"
import About from "@/components/sections/About"
import Applications from "@/components/sections/Applications"
import Contact from "@/components/sections/Contact"
import "./App.css"

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-cloud">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <Applications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
