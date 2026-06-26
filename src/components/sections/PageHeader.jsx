export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="border-b border-brand-line bg-brand-navy">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
