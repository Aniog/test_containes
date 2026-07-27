import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, CheckCircle } from "lucide-react"
import StrkImageLoader from "@/components/shared/StrkImageLoader"

export default function Hero() {
  return (
    <StrkImageLoader>
      <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              <span id="hero-tagline">Trusted by buyers in 30+ countries</span>
            </div>
            <h1
              id="hero-title"
              className="mt-6 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-lg leading-relaxed text-muted sm:text-xl"
            >
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link to="/contact">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
                No upfront fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Verified factories
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
                English-speaking team
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-2xl bg-primary/5"
              data-strk-bg-id="hero-bg-6d34fa"
              data-strk-bg="[hero-subtitle] [hero-title] [hero-tagline]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            <img
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-subtitle] [hero-title] [hero-tagline]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="China sourcing agent team visiting a factory"
              className="rounded-2xl object-cover shadow-lift"
            />
          </div>
        </div>
      </div>
    </section>
    </StrkImageLoader>
  )
}
