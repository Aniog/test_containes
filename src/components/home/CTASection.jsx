import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Sourcing from China?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Tell us about your product needs and we will provide a free, no-obligation
          sourcing plan within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-white/40 transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}