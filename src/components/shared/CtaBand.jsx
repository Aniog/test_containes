import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CtaBand = ({
  title = 'Ready to source from China with confidence?',
  description = 'Tell us what you want to buy. We will reply within one business day with a clear plan and a free, no-obligation quote.',
}) => {
  return (
    <section className="bg-gradient-to-br from-brand-800 to-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-accent-400"
          >
            Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
