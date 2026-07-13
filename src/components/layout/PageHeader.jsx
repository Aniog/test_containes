export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0">
        <div
          data-strk-bg-id={`pageheader-bg-${title.replace(/\s+/g, '-').toLowerCase()}`}
          data-strk-bg="[pageheader-desc] [pageheader-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-900/60" />
      </div>
      <div className="container-page relative py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              {eyebrow}
            </p>
          )}
          <h1
            id="pageheader-title"
            className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl"
          >
            {title}
          </h1>
          {description && (
            <p
              id="pageheader-desc"
              className="mt-4 max-w-2xl text-lg text-brand-100"
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
