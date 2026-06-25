import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The Atlas AF-3200 reads like a precision instrument. Our architectural panel work has never been more consistent.',
    name: 'Elena Marchetti',
    role: 'Studio Director, Marchetti Façades',
  },
  {
    quote:
      'We replaced three machines with a single double folder. The setup time we saved on the first month paid for the tooling.',
    name: 'Thomas Reiner',
    role: 'Production Lead, Reiner Stahl GmbH',
  },
  {
    quote:
      'Quiet, intuitive, and dependable. Our operators trained in a single shift and have not looked back.',
    name: 'Sofia Alvarez',
    role: 'Workshop Owner, Alvarez Metalwork',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-bronze">
          From the workshop
        </p>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-tight max-w-3xl">
          Trusted by fabricators who do not compromise.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border-t border-paper/15 pt-8 flex flex-col"
            >
              <Quote className="w-5 h-5 text-bronze" />
              <blockquote className="mt-5 text-base md:text-lg leading-relaxed text-white/90 font-serif">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/70">
                <span className="block text-white font-medium">{t.name}</span>
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
