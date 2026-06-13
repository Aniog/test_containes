import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PageHero = ({
  eyebrow,
  title,
  description,
  points = [],
  imageId,
  titleId,
  descriptionId,
  imagePrompt = '',
  imagePromptId = '',
  imageQuery = '',
}) => {

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            {eyebrow}
          </p>
          <h1
            id={titleId}
            className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            {title}
          </h1>
          <p
            id={descriptionId}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            {description}
          </p>
          {imagePrompt && imagePromptId ? (
            <span id={imagePromptId} className="sr-only">
              {imagePrompt}
            </span>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {points.map((point) => (
              <span
                key={point}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {point}
              </span>
            ))}
          </div>
          <Link
            to="/contact#inquiry-form"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-100 p-3 shadow-sm">
          <img
            alt={title}
            className="h-full min-h-[280px] w-full rounded-[1.25rem] object-cover"
            data-strk-img-id={imageId}
            data-strk-img={imageQuery}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </section>
  )
}

export default PageHero
