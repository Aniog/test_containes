import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship } from "lucide-react"
import { Button, Container } from "@/components/ui/primitives"
import { useStrkImages } from "@/lib/useStrkImages"

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-slate-900/80" />

      <Container className="relative">
        <div className="max-w-3xl py-20 md:py-28">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-200 ring-1 ring-inset ring-blue-400/30">
            China-Based Sourcing Agent
          </span>
          <h1
            id="hero-title"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality,
            follow production, and coordinate shipping — so you can source from China with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="light" className="gap-2">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/how-it-works" variant="outlineLight">
              See How It Works
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Factories verified on-site" },
              { icon: ClipboardCheck, label: "Independent QC inspection" },
              { icon: Ship, label: "Shipping to 40+ countries" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-slate-200">
                <Icon className="h-5 w-5 shrink-0 text-blue-300" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
