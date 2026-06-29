const sectors = [
  'HVAC fabrication',
  'Architectural sheet metal',
  'Custom enclosure manufacturing',
  'Industrial panel production',
]

function IndustryShowcase() {
  return (
    <section className="bg-brand-ink py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/6 p-8 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-champagne">
            Applications
          </p>
          <h2 id="industry-title" className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built for the environments where precise folding matters every day.
          </h2>
          <p id="industry-subtitle" className="mt-5 text-base leading-8 text-white/74 md:text-lg">
            From specialized workshops to larger production operations, our product
            positioning is tailored to industries that rely on dependable,
            repeatable sheet metal forming.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/84"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-brand-steel p-3">
          <img
            alt="Industrial folding machinery in a metal fabrication environment"
            className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
            data-strk-img-id="industry-img-artitect-4z8q1m"
            data-strk-img="[industry-subtitle] [industry-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </section>
  )
}

export default IndustryShowcase
