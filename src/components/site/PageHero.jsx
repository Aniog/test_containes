function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-brand-line bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-ink/75">{description}</p>
      </div>
    </section>
  )
}

export default PageHero
