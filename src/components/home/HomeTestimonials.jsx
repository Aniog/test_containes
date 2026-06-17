const testimonials = [
  {
    quote:
      'The DS-3200 has run two shifts a day for four years. We have not missed a delivery once.',
    name: 'Marta Linden',
    role: 'Production Manager, Linden Cladding AB',
  },
  {
    quote:
      'Compared to the Italian folder we replaced, the SF-2500 cut our setup time in half. The interface is just calmer.',
    name: 'Diego Ruiz',
    role: 'Owner, Ruiz Sheet Metal Co.',
  },
  {
    quote:
      'Service response in under 24 hours, anywhere in Europe. That alone made the switch worthwhile.',
    name: 'Henrik Olsen',
    role: 'Plant Director, Nordvik HVAC',
  },
]

const HomeTestimonials = () => {
  return (
    <section className="bg-neutral-950 text-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-32">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-5">
            Trusted by fabricators
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl tracking-tight text-neutral-50">
            What our customers say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-neutral-800 pt-8">
              <blockquote className="font-serif text-xl md:text-2xl font-light leading-snug text-neutral-100">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-neutral-50 text-sm tracking-wide">{t.name}</p>
                <p className="text-neutral-400 text-xs mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonials
