import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/Button"

export default function HeroSection({ onContactClick }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-100 opacity-50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-100 opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            We're here to help
          </span>
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Let's Build Something <span className="text-indigo-600">Great Together</span>
          </h1>
          <p id="hero-subheading" className="text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
            We help businesses grow with smart solutions and dedicated support. Reach out and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button size="lg" onClick={onContactClick}>
              Get in Touch
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-subheading] [hero-heading]"
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
