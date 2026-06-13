import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function PageHero({ eyebrow, title, description, ctaLabel = 'Get a Free Sourcing Quote', ctaTo = '/contact#quote-form' }) {
  return (
    <section className="bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.16em] text-blue-100 ring-1 ring-white/15">
            {eyebrow}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
          <p className="text-base leading-8 text-slate-300 md:text-lg">{description}</p>
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PageHero
