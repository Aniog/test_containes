import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const trustBadges = [
  'No upfront supplier fees',
  'Bilingual account managers',
  'Verified factory network',
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl text-white">
          <span className="mb-4 inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm font-semibold text-secondary">
            China Sourcing Agent for Global Buyers
          </span>
          <h1
            id="hero-title"
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            Reliable Suppliers, Verified Quality, Smoother Shipping
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg leading-relaxed text-slate-200 md:text-xl"
          >
            SSourcing China helps overseas buyers find the right manufacturers, verify factories, inspect quality, follow production, and coordinate delivery from China to your door.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-slate-900 sm:w-auto">
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-200">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
