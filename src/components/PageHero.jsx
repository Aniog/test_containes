function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="border-b border-border-soft bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong">
            {eyebrow}
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted">{description}</p>
          </div>
        </div>
        <div className="flex items-end">
          <div className="w-full rounded-3xl border border-border-soft bg-panel p-6 text-ink shadow-sm md:p-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
