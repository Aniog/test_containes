import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-brand-800 to-brand-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Sourcing from China?
        </h2>
        <p className="text-lg text-blue-100/80 mb-8 max-w-xl mx-auto">
          Get a free, no-obligation sourcing quote. Tell us what you need, and we will show you how we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-accent-600 hover:bg-accent-700 text-white font-semibold px-8 py-3.5 rounded-lg text-lg inline-flex items-center gap-2 transition-colors shadow-lg shadow-orange-600/25"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/services"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}