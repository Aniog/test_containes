import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { StockBackground } from "@/components/shared/StockImage"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <StockBackground
        bgId="hero-bg-ssourcing-c1d2e3"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width="1600"
        className="absolute inset-0 z-0 bg-slate-800"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <h1
            id="hero-title"
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg text-slate-200 sm:text-xl"
          >
            Find reliable suppliers, verify factories, inspect quality, follow
            production, and coordinate shipping — all with a local team on the
            ground in China.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-white text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
              10+ years in sourcing
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
              English-speaking project managers
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
              On-site factory visits
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
