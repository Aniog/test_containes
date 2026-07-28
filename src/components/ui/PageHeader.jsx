export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="bg-brand-surface border-b border-brand-border">
      <div className="max-w-container mx-auto container-px py-14 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-brand-ink tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base md:text-lg text-brand-slate leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
