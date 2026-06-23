import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const CTASection = () => (
  <section className="bg-slate-950 py-16 text-white sm:py-20">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Start with a clear sourcing brief</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Need a reliable local team to check suppliers and follow production in China?
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
          Tell us what you want to source. We will review your requirements and reply with practical next steps for supplier search, verification, QC, or shipping coordination.
        </p>
      </div>
      <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-xl">
        <div className="space-y-3 text-sm text-slate-100">
          {['Clear requirements review', 'Practical sourcing plan', 'Professional English communication'].map((item) => (
            <div className="flex items-center gap-3" key={item}>
              <CheckCircle2 className="h-5 w-5 flex-none text-cyan-200" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <Link
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          to="/contact"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
)

export default CTASection
