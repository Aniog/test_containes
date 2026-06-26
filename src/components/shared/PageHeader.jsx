export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </section>
  )
}
