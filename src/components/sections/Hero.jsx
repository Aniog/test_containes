import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2a4a]">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-3f7a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[#0f2a4a]/85" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
            China-based sourcing agent for global buyers
          </span>

          <h1
            id="hero-title"
            className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            can source from China with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/contact" variant="accent" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/how-it-works" variant="white" size="lg">
              See how it works
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { icon: ShieldCheck, label: "Factory verification" },
              { icon: ClipboardCheck, label: "Independent QC" },
              { icon: Ship, label: "End-to-end shipping" },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.label} className="flex items-center gap-2 text-sm text-slate-200">
                  <Icon className="h-5 w-5 text-[#f59e0b]" />
                  {f.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
