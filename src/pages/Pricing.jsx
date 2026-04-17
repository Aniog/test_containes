import PricingPlans from '../components/pricing/PricingPlans'
import AboutSection from '../components/pricing/AboutSection'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function PricingCTA() {
  return (
    <section className="py-20 bg-indigo-600 relative overflow-hidden">
      {/* Dashed circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-white/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-white/10 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Start building today
        </h2>
        <p className="mt-4 text-indigo-200 text-lg">
          Join 12,000+ businesses already using NexusAI to power their web presence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/pricing"
            className="flex items-center gap-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Get started free <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/product#contact"
            className="text-white font-medium border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Pricing() {
  return (
    <>
      <PricingPlans />
      <PricingCTA />
      <AboutSection />
    </>
  )
}
