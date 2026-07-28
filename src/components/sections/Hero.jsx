import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, ClipboardCheck, ShipWheel } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-dark">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/60" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-light">
            China-Based Sourcing Agent
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg leading-relaxed text-slate-200 md:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping, with
            one dedicated team on the ground in China.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/contact" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: ShieldCheck, label: "Verified factories" },
              { icon: ClipboardCheck, label: "Independent QC" },
              { icon: ShipWheel, label: "End-to-end shipping" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-slate-200">
                <item.icon className="h-5 w-5 text-brand-light" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
