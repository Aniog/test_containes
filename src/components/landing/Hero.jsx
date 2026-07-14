import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-indigo-900/80 via-indigo-800/70 to-purple-900/80" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Now accepting new clients</span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Let's Build Something
          <span className="block text-indigo-300">Amazing Together</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We help businesses grow with modern solutions. Tell us about your project and we'll get back to you within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-8 shadow-xl">
              Get in Touch
            </Button>
          </a>
          <a href="#features">
            <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8">
              Learn More
            </Button>
          </a>
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}

export default Hero
