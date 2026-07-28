export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-light">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
