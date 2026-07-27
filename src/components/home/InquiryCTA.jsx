import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function InquiryCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need. We will find the right supplier, verify the factory, inspect quality, and coordinate delivery — so you can focus on growing your business.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-semibold no-underline hover:bg-accent-light transition-colors"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-white/60 text-sm mt-4">
          No commitment required. We respond within 24 hours.
        </p>
      </div>
    </section>
  )
}
