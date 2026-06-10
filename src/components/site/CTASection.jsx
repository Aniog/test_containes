import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red-400">Start sourcing</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Tell us what you need to source. We&rsquo;ll reply within 24 hours.
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-300">
              Send us your product details, target price and quantity. Our team will identify suitable suppliers, share factory options and quote you a clear sourcing plan.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:hello@ssourcingchina.com"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              Email our team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
