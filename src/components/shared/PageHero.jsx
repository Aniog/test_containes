import { Link } from 'react-router-dom'

const PageHero = ({
  eyebrow,
  title,
  description,
  titleId,
  descriptionId,
  primaryHref = '/contact',
  primaryLabel = 'Get a Free Sourcing Quote',
  secondaryHref = '/services',
  secondaryLabel = 'Explore Services',
}) => {
  return (
    <section className="border-b border-surface-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {eyebrow}
          </p>
          <h1 id={titleId} className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy md:text-5xl">
            {title}
          </h1>
          <p id={descriptionId} className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
            >
              {primaryLabel}
            </Link>
            <Link
              to={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
