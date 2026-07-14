import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-6 tracking-wide uppercase">
            Simple. Effective. Yours.
          </span>
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Connect with people who matter
          </h1>
          <p
            id="hero-subheading"
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            A beautiful landing page that captures leads and keeps them organized — all in one place. No backend required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-base px-8">
                Get in Touch
                <ArrowDown className="h-4 w-4" />
              </Button>
            </a>
            <a href="#features">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8">
                Learn More
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-20 rounded-2xl overflow-hidden shadow-2xl border border-border max-w-4xl mx-auto">
          <img
            alt="Team collaboration"
            data-strk-img-id="hero-main-img-a1b2c3"
            data-strk-img="[hero-subheading] [hero-heading]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
