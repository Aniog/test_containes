import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Shield, CheckCircle } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import Button from "@/components/ui/Button"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-50">
        <div
          className="absolute inset-0 z-0 opacity-10"
          data-strk-bg-id="hero-bg-global-logistics"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container-site relative z-10 grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Shield className="h-4 w-4" />
              <span>Trusted by buyers in 30+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl font-extrabold leading-tight text-navy-900 md:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-600 md:text-xl">
              SSourcing China helps overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — end to end.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button as={Link} to="/contact" variant="cta" size="lg">
                Get a Free Sourcing Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button as={Link} to="/how-it-works" variant="outline" size="lg">
                See How It Works
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" /> Factory verified
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" /> Quality controlled
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" /> Shipping managed
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              data-strk-img-id="hero-main-factory-floor"
              data-strk-img="[hero-title] [hero-subtitle]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Modern factory floor in China"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
    </section>
  )
}
