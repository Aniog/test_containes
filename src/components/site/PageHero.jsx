import StockImage from './StockImage'

function PageHero({
  eyebrow,
  title,
  description,
  titleId,
  descriptionId,
  imageId,
  imageContext,
  imageAlt,
}) {
  const imageContextId = `${titleId}-image-context`

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">
            {eyebrow}
          </p>
          <h1 id={titleId} className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          <p id={descriptionId} className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
          {imageContext ? (
            <p id={imageContextId} className="sr-only">
              {imageContext}
            </p>
          ) : null}
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
          <StockImage
            alt={imageAlt || title}
            className="h-full min-h-[320px] w-full object-cover"
            imgId={imageId}
            query={imageContext ? `[${imageContextId}] [${descriptionId}] [${titleId}]` : `[${descriptionId}] [${titleId}]`}
            ratio="4x3"
            width="900"
          />
        </div>
      </div>
    </section>
  )
}

export default PageHero
