import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useImageLoader } from "@/hooks/useImageLoader"
import { StrkBackground } from "@/components/shared/StrkImage"

export function HomeHero() {
  const ref = useImageLoader([])
  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-900">
      <StrkBackground
        bgId="hero-bg-3a8c1f"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1600}
        className="absolute inset-0 opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/85 to-brand-800/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-accent-400" />
            China-based sourcing & QC team
          </span>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            import from China with fewer surprises and lower risk.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/contact" variant="accent" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/services" variant="outlineWhite" size="lg">
              Explore Services
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
            {[
              "On-site factory audits",
              "AQL quality inspections",
              "Production follow-up",
              "Shipping coordination",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
