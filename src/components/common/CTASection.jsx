import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-slate-900 px-6 py-10 text-white md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
                Start with a clear sourcing brief
              </span>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Need a supplier check, QC support, or full sourcing help in China?
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-200 md:text-lg">
                Tell us what you need to source, what risks you want to reduce, and where you need support. We will review the inquiry and suggest practical next steps.
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
