import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              Start your project
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Tell us what you need to source from China
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Share product details, target price and quantity. We will reply with a quote,
              suggested factories and next steps within one business day.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 md:text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
