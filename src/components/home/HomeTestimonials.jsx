const testimonials = [
  {
    quote:
      'We replaced two older folders with a single AF-2500D and gained capacity overnight. The folds are dead-on and our operators love the control panel.',
    name: 'Marco Bianchi',
    role: 'Production Manager, Lombardia Facciate',
  },
  {
    quote:
      'After 14 years our SF-1600 is still our most-used machine. That alone tells you everything about ARTITECT.',
    name: 'Elena Voss',
    role: 'Owner, Voss Metalwork',
  },
  {
    quote:
      'They engineered a custom solution for our duct line that nobody else even quoted. Throughput up 38% in the first quarter.',
    name: 'James Okafor',
    role: 'Operations Director, Northwind HVAC',
  },
]

export default function HomeTestimonials() {
  return (
    <section className="bg-bone-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Trusted Worldwide</p>
          <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-graphite-900 leading-tight">
            Words from the workshop floor.
          </h2>
          <div className="hairline-brass mt-6" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white border border-bone-200 p-8 md:p-10 flex flex-col"
            >
              <span className="font-serif text-5xl text-brass-500 leading-none">"</span>
              <blockquote className="mt-4 text-graphite-900 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-bone-200">
                <div className="font-medium text-graphite-900">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-steel-500 mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
