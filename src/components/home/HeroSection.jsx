import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:py-28 sm:px-6 lg:px-8">
        <div className="order-2 md:order-1">
          <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg leading-relaxed text-slate-600"
          >
            We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              'Verified factory network across 15+ industries',
              'On-ground quality control & inspections',
              'End-to-end logistics coordination',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link to="/contact">
                Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-xl"
            data-strk-bg-id="hero-bg-ssourcing-a1b2c3"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
          />
        </div>
      </div>
    </section>
  )
}
