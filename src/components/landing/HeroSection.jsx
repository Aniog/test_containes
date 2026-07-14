import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"

const HeroSection = ({ onScrollToContact }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            We're here to help
          </span>
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Let's Build Something <span className="text-indigo-600">Great Together</span>
          </h1>
          <p id="hero-subtitle" className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
            Have a project in mind or just want to say hello? We'd love to hear from you. Drop us a message and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button size="lg" onClick={onScrollToContact}>
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" onClick={onScrollToContact}>
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 w-full max-w-md">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
