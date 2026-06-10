export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
