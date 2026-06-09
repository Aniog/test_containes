const PageIntro = ({
  idPrefix,
  eyebrow,
  title,
  description,
  points = [],
  imageQuery,
}) => {
  const titleId = `${idPrefix}-title`
  const descriptionId = `${idPrefix}-description`

  return (
    <section className="border-b border-slate-200 bg-white py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            {eyebrow}
          </p>
          <h1
            className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl"
            id={titleId}>
            {title}
          </h1>
          <p
            className="mt-5 text-base leading-7 text-slate-600 md:text-lg"
            id={descriptionId}>
            {description}
          </p>
          {points.length ? (
            <ul className="mt-8 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              {points.map((point) => (
                <li
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                  key={point}>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
          <img
            alt={title}
            className="h-full min-h-72 w-full object-cover"
            data-strk-img-id={`${idPrefix}-image-c1`}
            data-strk-img={imageQuery || `[${descriptionId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </section>
  )
}

export default PageIntro
