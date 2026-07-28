import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Shield, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f4f8] via-white to-[#f6f8fb]">
      <div className="container-main py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              Trusted by 200+ buyers across 30 countries
            </div>
            <h1
              id="hero-title"
              className="text-4xl font-extrabold leading-tight text-text-primary md:text-5xl lg:text-[52px]"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
                No upfront fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Verified suppliers only
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
                On-ground team
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg"
              data-strk-bg-id="hero-bg-a1b2c3"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
