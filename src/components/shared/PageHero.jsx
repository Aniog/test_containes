const PageHero = ({ eyebrow, title, description, children }) => (
  <section className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
          {description}
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-slate-100 shadow-card">
        {children}
      </div>
    </div>
  </section>
)

export default PageHero
