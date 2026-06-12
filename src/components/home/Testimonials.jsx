const testimonials = [
  {
    id: 't-1',
    quote:
      'We replaced two press brakes with a single AD-720. Output went up, scrap went down, and our operators actually enjoy programming it.',
    name: 'M. Bergamini',
    role: 'Production Manager, Tecnometal',
  },
  {
    id: 't-2',
    quote:
      'The double folder lets us run cladding panels without flipping a 3 m sheet by hand. Our shop is quieter and faster — that matters.',
    name: 'L. Hofer',
    role: 'Owner, Hofer Fassaden',
  },
  {
    id: 't-3',
    quote:
      'After-sales response is the real luxury. Calibration support over video, parts in 48 hours. Not a single lost shift in three years.',
    name: 'A. Romero',
    role: 'Plant Director, Aceros del Sur',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-paper border-y border-mist/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-steel mb-5">
          Trusted on the shop floor
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-ink leading-tight max-w-3xl">
          Words from the people who run them all day.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-mist/50 border border-mist/50">
          {testimonials.map((t) => (
            <figure key={t.id} className="bg-paper p-8">
              <span className="font-serif text-5xl text-accent leading-none">“</span>
              <blockquote className="mt-2 text-base text-ink leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-5 border-t border-mist/60">
                <p className="text-sm text-ink font-medium">{t.name}</p>
                <p className="text-xs text-steel mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
