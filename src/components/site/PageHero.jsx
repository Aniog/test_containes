const PageHero = ({ eyebrow, title, description }) => {
  return (
    <section className="border-b border-brand-line bg-brand-surface py-16 md:py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-slate">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default PageHero
