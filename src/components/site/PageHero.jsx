const PageHero = ({ eyebrow, title, description }) => (
  <section className="bg-slate-50 py-16 text-slate-900 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">{description}</p>
      </div>
    </div>
  </section>
)

export default PageHero
