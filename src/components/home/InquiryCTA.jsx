import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function InquiryCTA() {
  return (
    <section className="py-16 md:py-24 bg-navy-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to Start Sourcing from China?
        </h2>
        <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Tell us what you need. We'll find the right suppliers, verify them, and manage the entire process — from first contact to delivered goods.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-accent-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-colors"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="mt-4 text-navy-200 text-sm">No commitment required. Free initial consultation.</p>
      </div>
    </section>
  )
}
