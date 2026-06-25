import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0B2545]">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(155,197,232,0.10), transparent 50%)',
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(27,111,184,0.45), transparent)' }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9EC5E8]">
            Ready when you are
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-4xl">
            Tell us what you need to source from China
          </h2>
          <p className="mt-3 text-base text-slate-200 md:text-lg">
            Send us your product brief. We will reply within one business day with next steps,
            indicative pricing and a clear sourcing plan.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0B2545] transition-colors hover:bg-slate-100"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="mailto:hello@ssourcing-china.com"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/0 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Email us directly
          </a>
        </div>
      </div>
    </section>
  )
}
