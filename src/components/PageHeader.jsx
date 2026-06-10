export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg text-white/80 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
