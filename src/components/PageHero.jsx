export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(217,119,6,0.25), transparent 50%), radial-gradient(circle at 80% 60%, rgba(27,79,114,0.6), transparent 50%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-5">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
