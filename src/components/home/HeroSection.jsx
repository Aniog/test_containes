import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div
        className="absolute inset-0 bg-slate-800 bg-cover bg-center opacity-40"
        data-strk-bg-id="hero-bg-9a8b7c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative container-main py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
            <CheckCircle className="h-4 w-4 text-accent" />
            Trusted by buyers in 45+ countries
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg text-white/80 lg:text-xl"
          >
            Find reliable suppliers, verify factories, inspect quality, follow
            production, and coordinate shipping — all with a bilingual team on
            the ground in China.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/70">
            {["Supplier sourcing", "Factory audits", "QC inspections", "Shipping support"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
