import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Tell us about your project and get a free sourcing assessment. No obligation, just practical advice.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors shadow-lg shadow-accent-500/25"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}