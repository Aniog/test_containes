export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">{description}</p>
        </div>
      </div>
    </section>
  )
}
