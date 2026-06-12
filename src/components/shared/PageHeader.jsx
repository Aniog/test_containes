export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="relative bg-brand text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-500 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-3xl text-base md:text-lg text-slate-200 leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
