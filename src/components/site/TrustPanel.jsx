import { BadgeCheck } from 'lucide-react'

const TrustPanel = ({
  title,
  description,
  points,
  titleId,
  descriptionId,
  imageId,
  imagePrompt = '',
  imagePromptId = '',
  imageQuery = '',
}) => {

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Why buyers work with us
          </p>
          <h2 id={titleId} className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          <p id={descriptionId} className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
          {imagePrompt && imagePromptId ? (
            <span id={imagePromptId} className="sr-only">
              {imagePrompt}
            </span>
          ) : null}
          <div className="mt-6 grid gap-4">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-100 p-3">
          <img
            alt={title}
            className="h-full min-h-[320px] w-full rounded-[1.25rem] object-cover"
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

export default TrustPanel
