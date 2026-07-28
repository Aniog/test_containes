import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Button from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7d3a9f"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold text-white border border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent" />
            China-Based Sourcing Agent
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so
            you import from China with confidence.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Verified factories, not trading companies",
              "Independent pre-shipment QC",
              "Weekly production follow-up",
              "Door-to-door shipping coordination",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-100 text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button as={Link} to="/contact" size="lg">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Button>
            <Button as={Link} to="/how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
