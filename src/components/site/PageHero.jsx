import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function PageHero({ kicker, title, description, primaryCta, secondaryCta, image }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {kicker}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primaryCta ? (
              <Link
                to={primaryCta.to}
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                to={secondaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                {secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>
        {image ? (
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <img
              alt={image.alt}
              className="h-full w-full object-cover"
              data-strk-img-id={image.id}
              data-strk-img={image.query}
              data-strk-img-ratio={image.ratio}
              data-strk-img-width={image.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PageHero
