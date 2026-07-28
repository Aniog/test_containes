import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import InquiryForm from '@/components/shared/InquiryForm'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Hero() {
  const containerRef = useImageLoader()

  const trustItems = [
    'Supplier verification',
    'Quality inspections',
    'Production follow-up',
    'Shipping coordination',
  ]

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gray-900 py-16 lg:py-24">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-primary-light/20 px-4 py-1 text-sm font-medium text-blue-100">
              China-Based Sourcing Agent
            </span>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg text-gray-300 lg:text-xl">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping from China.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <InquiryForm title="Request a Free Quote" />
          </div>
        </div>
      </div>
    </section>
  )
}
