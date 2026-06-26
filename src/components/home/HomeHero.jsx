import Button from "@/components/ui/Button"
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship } from "lucide-react"

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B2545]">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/90 to-[#0B2545]/60" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200">
            China-Based Sourcing Agent
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            can source from China with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="accent" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/how-it-works" variant="outlineLight" size="lg">
              See How It Works
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Verified Suppliers",
                text: "On-site factory audits before you commit.",
              },
              {
                icon: ClipboardCheck,
                title: "Independent QC",
                text: "Pre-shipment inspections with photo reports.",
              },
              {
                icon: Ship,
                title: "End-to-End Shipping",
                text: "Consolidation, freight, and documentation.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-[#1B6CA8]" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
