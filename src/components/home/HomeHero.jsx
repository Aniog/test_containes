import { ArrowRight, ShieldCheck, ClipboardCheck, ShipWheel } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-brand/85" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            <ShieldCheck className="h-4 w-4 text-accent" />
            China-based sourcing agent for global buyers
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — with
            one accountable local team in China.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/how-it-works" variant="ghostLight" size="lg">
              See How It Works
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <Feature icon={ShieldCheck} label="Factory verification" />
            <Feature icon={ClipboardCheck} label="Independent QC" />
            <Feature icon={ShipWheel} label="End-to-end shipping" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-white">
      <Icon className="h-5 w-5 text-accent" />
      {label}
    </div>
  )
}
