export default function PageHeader({ kicker, title, subtitle }) {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {kicker && (
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{kicker}</p>
          )}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
