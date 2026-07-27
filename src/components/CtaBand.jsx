import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBand({
  title = 'Ready to source from China with confidence?',
  subtitle = 'Send us your product requirements and receive a free, no-obligation sourcing quote within one business day.',
}) {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">{subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
