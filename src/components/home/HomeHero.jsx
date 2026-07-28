import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Section"

export default function HomeHero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-bg">
      <Container className="py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">
              <ShieldCheck className="h-3.5 w-3.5" />
              China-Based Sourcing Agent
            </span>
            <h1
              id="hero-title"
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 text-lg text-slate-ink leading-relaxed max-w-xl"
            >
              We help overseas buyers find reliable suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — so
              your orders arrive right, on time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button as={Link} to="/contact" size="lg">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as={Link} to="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "Verified factories, not just listings",
                "Independent pre-shipment QC",
                "One coordinator, end to end",
                "Transparent pricing and updates",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-slate-ink"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lift">
              <img
                alt="Factory production line in China"
                data-strk-img-id="hero-factory-9a3f1c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 rounded-xl bg-surface border border-border shadow-lift px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light">
                <ShieldCheck className="h-5 w-5 text-brand" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">Verified suppliers</p>
                <p className="text-xs text-slate-ink">On-site factory audits</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
