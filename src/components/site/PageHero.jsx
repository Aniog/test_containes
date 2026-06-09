import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PageHero = ({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  children,
}) => {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 text-slate-950 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:py-24">
        <div>
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryLabel ? (
              <Link
                to={primaryTo}
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                {primaryLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            ) : null}
            {secondaryLabel ? (
              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default PageHero
