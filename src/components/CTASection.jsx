import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to source from China with confidence?
            </h2>
            <p className="mt-3 text-slate-300 text-base md:text-lg max-w-2xl">
              Send us your product brief. We will review it, suggest an approach, and reply
              with a clear sourcing quote within one business day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-amber-400 text-brand-navy hover:bg-amber-300 px-6 py-3 text-sm font-semibold transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-white/30 text-white hover:bg-white/10 px-6 py-3 text-sm font-semibold transition"
            >
              See Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
