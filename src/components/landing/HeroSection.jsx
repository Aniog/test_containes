import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/Button"

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Simple. Powerful. Reliable.
          </span>
          <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Build better connections with your audience
          </h1>
          <p id="hero-subheading" className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
            Collect leads, manage contacts, and grow your business — all from one beautiful, easy-to-use platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" onClick={scrollToContact}>
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              alt="Business team collaborating"
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-subheading] [hero-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
