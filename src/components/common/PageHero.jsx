const PageHero = ({ eyebrow, title, description }) => (
  <section className="bg-slate-950 py-20 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
    </div>
  </section>
)

export default PageHero
