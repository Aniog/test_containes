import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"

const HeroSection = ({ onContactClick }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-20 md:pt-32 md:pb-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 opacity-40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-100 opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-6">
              🚀 Now available
            </span>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Build better products,{" "}
              <span className="text-blue-600">faster than ever</span>
            </h1>
            <p
              id="hero-subheading"
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
            >
              The all-in-one platform that helps teams collaborate, ship, and
              grow. Join thousands of companies already using our tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onContactClick}>
                Get in touch
              </Button>
              <Button size="lg" variant="outline">
                Learn more
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No credit card required · Free 14-day trial
            </p>
          </div>

          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                data-strk-img-id="hero-product-img-a1b2c3"
                data-strk-img="[hero-subheading] [hero-heading]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Product dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
