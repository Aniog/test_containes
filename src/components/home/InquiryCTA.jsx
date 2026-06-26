import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function InquiryCTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Source from China?
        </h2>
        <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
          Tell us what you need and we will send you a free, no-obligation sourcing quote within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
