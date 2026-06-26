export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          data-strk-bg-id="page-header-bg-9e2cd7"
          data-strk-bg="[page-header-title] [page-header-eyebrow]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-blue/90" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        {eyebrow && (
          <p
            id="page-header-eyebrow"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70"
          >
            {eyebrow}
          </p>
        )}
        <h1
          id="page-header-title"
          className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl"
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  )
}
