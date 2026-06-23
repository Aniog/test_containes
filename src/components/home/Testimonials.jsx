import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mara L.',
    quote: 'The huggies look far more expensive than they are. I wear them with everything.',
  },
  {
    name: 'Elena R.',
    quote: 'Beautiful packaging and the necklace felt thoughtful without being over the top.',
  },
  {
    name: 'Priya S.',
    quote: 'Subtle, warm, and comfortable. The kind of jewelry you forget to take off.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-parchment py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-goldDeep">Notes from customers</p>
          <h2 className="mt-3 font-serifDisplay text-5xl font-medium text-velmora-ink md:text-6xl">Loved in Real Life</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-velmora-oyster bg-velmora-pearl p-8 text-velmora-ink shadow-soft">
              <div className="flex gap-1 text-velmora-goldDeep" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-serifDisplay text-2xl leading-9 text-velmora-ink">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-bark">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
