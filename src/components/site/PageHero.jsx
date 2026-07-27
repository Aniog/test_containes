const PageHero = ({ eyebrow, title, description, actions, visual }) => {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        {visual ? <div>{visual}</div> : null}
      </div>
    </section>
  )
}

export default PageHero
