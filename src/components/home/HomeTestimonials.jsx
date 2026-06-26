const testimonials = [
  {
    quote:
      'The A-7 cut our setup time in half and the folds look like they were polished. The team treats every machine as a finished object.',
    name: 'Hiroshi Tanaka',
    role: 'Production Lead, Tanaka Sheet Works',
  },
  {
    quote:
      'We have run our S-5 two shifts a day for six years. It still folds within tolerance and the after-sales support is genuinely excellent.',
    name: 'Marta Vogel',
    role: 'Owner, Vogel Architectural Metals',
  },
]

export default function HomeTestimonials() {
  return (
    <section className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium">
            In the workshop
          </span>
          <h2 className="mt-5 font-serif text-3xl md:text-5xl text-stone-900 leading-tight tracking-tight">
            Trusted by fabricators who care about the fold.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white border border-stone-200 p-10 flex flex-col"
            >
              <span className="font-serif text-5xl text-amber-800 leading-none">
                &ldquo;
              </span>
              <blockquote className="mt-2 font-serif text-xl md:text-2xl text-stone-900 leading-snug">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-stone-200">
                <div className="font-medium text-stone-900 text-sm tracking-wide">
                  {t.name}
                </div>
                <div className="mt-1 text-xs text-stone-500 uppercase tracking-[0.2em]">
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
