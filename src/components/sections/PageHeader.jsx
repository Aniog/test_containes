export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-action mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-200 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
