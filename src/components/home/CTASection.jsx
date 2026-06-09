import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="w-full bg-navy-900 text-white py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          Get a free sourcing quote. No commitment required.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent-500 text-navy-900 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-accent-400 transition-colors"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>Free initial consultation and supplier search</span>
        </div>
      </div>
    </section>
  )
}
