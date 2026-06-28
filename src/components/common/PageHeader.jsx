const PageHeader = ({ baseId, eyebrow, title, description }) => {
  const eyebrowId = `${baseId}-eyebrow`
  const titleId = `${baseId}-title`
  const descriptionId = `${baseId}-description`

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 px-6 py-12 text-white shadow-sm sm:px-10 lg:px-12 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_30%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(30,41,59,0.96))]" />
          <div className="absolute -right-10 top-6 h-44 w-44 rounded-full border border-white/10 bg-white/5 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full border border-amber-300/10 bg-amber-300/10 blur-2xl" />
          <div className="relative max-w-3xl">
            <p
              id={eyebrowId}
              className="text-sm font-semibold uppercase tracking-widest text-amber-300"
            >
              {eyebrow}
            </p>
            <h1
              id={titleId}
              className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl"
            >
              {title}
            </h1>
            <p
              id={descriptionId}
              className="mt-5 text-base leading-7 text-slate-200 md:text-lg"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHeader
