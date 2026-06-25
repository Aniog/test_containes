import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTASection = () => (
  <section className="bg-slate-950 py-16 text-white md:py-20">
    <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
          Ready to source with more clarity?
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Send your product brief and receive practical next steps.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          SSourcing China helps overseas buyers compare suppliers, check factories,
          inspect quality, follow production, and coordinate shipping details.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-sm">
        <div className="space-y-3 text-sm text-slate-200">
          {['Clear sourcing requirements', 'Supplier and factory review', 'QC and shipping coordination'].map((item) => (
            <div className="flex items-center gap-3" key={item}>
              <CheckCircle2 className="h-5 w-5 text-blue-200" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <Link
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
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
