import { Link } from 'react-router-dom'

const PageHero = ({
  slug,
  eyebrow,
  title,
  description,
  primaryTo = '/contact',
  primaryLabel = 'Get a Free Sourcing Quote',
  secondaryTo,
  secondaryLabel,
  imageAlt,
  imageCaption,
}) => {
  const titleId = `${slug}-hero-title`
  const descriptionId = `${slug}-hero-description`
  const captionId = `${slug}-hero-caption`

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr,0.95fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">
            {eyebrow}
          </span>
          <h1 id={titleId} className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          <p id={descriptionId} className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              {primaryLabel}
            </Link>
            {secondaryTo && secondaryLabel ? (
              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <img
            alt={imageAlt}
            className="h-full min-h-80 w-full rounded-[1.5rem] object-cover"
            data-strk-img-id={`${slug}-hero-image-a43p9m`}
            data-strk-img={`[${descriptionId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <p id={captionId} className="px-2 pt-4 text-sm leading-6 text-slate-500">
            {imageCaption}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageHero
