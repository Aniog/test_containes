import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, ClipboardCheck, ShipWheel } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const highlights = [
  { icon: ShieldCheck, label: "Verified factories" },
  { icon: ClipboardCheck, label: "Independent QC" },
  { icon: ShipWheel, label: "Shipping coordinated" },
]

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="relative overflow-hidden bg-primary-900" ref={containerRef}>
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-primary-900/85" />

      <div className="relative mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-primary-400/40 bg-primary-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400">
            China-Based Sourcing Agent
          </span>
          <h1
            id="hero-title"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-100 sm:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping - so you
            can import from China with clarity and confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/contact" variant="accent" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              as={Link}
              to="/how-it-works"
              variant="outline"
              size="lg"
              className="border-primary-400 text-white hover:bg-primary-800"
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-primary-100"
              >
                <Icon className="h-5 w-5 text-accent-400" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
