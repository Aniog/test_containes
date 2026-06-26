export default function PageHero({ eyebrow, title, description, titleId, descId }) {
  const safeId = (titleId || title || "hero")
    .toString()
    .replace(/\s+/g, "-")
    .toLowerCase();

  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id={`pagehero-bg-${safeId}`}
        data-strk-bg={`[${descId || "pagehero-desc"}] [${titleId || "pagehero-title"}] china manufacturing factory`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Dark overlays for legibility */}
      <div className="absolute inset-0 bg-navy-900/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
              {eyebrow}
            </p>
          )}
          <h1
            id={titleId}
            className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            {title}
          </h1>
          {description && (
            <p
              id={descId}
              className="mt-5 text-base md:text-lg text-slate-200 leading-relaxed"
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
