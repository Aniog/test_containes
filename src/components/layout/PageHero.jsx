const PageHero = ({ eyebrow, title, description }) => {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  )
}

export default PageHero
