import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maya R.',
    quote: 'The huggies look far more expensive than they are. I wear them almost every day.',
  },
  {
    name: 'Elise T.',
    quote: 'Beautiful packaging, warm gold tone, and the necklace was the perfect birthday gift.',
  },
  {
    name: 'Nora S.',
    quote: 'Quiet, polished, and comfortable. Velmora has become my go-to for small luxuries.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-porcelain py-16 text-velmora-espresso sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Notes from customers</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-espresso sm:text-5xl">Loved for everyday glow</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="border border-velmora-sand/70 bg-velmora-ivory p-7 text-velmora-espresso transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex gap-1 text-velmora-gold" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-snug text-velmora-espresso">“{item.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
