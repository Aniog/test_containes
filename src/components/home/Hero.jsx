import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Button from "@/components/ui/Button"
import { SectionContainer } from "@/components/ui/Section"
import { PRIMARY_CTA } from "@/data/site"

const HERO_POINTS = [
  "Vetted suppliers, verified on-site",
  "Independent quality inspections",
  "Door-to-door shipping coordination",
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-primary">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />

      <SectionContainer className="relative py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
            China-Based Sourcing Agent
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so your
            orders from China arrive on spec and on time.
          </p>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {HERO_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-slate-100"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-400" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to={PRIMARY_CTA.to} variant="primary" size="lg">
              {PRIMARY_CTA.label}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/how-it-works" variant="outline" size="lg" className="border-white/30 text-white hover:border-white hover:text-white">
              See How It Works
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
