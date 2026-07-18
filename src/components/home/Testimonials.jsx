import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Maya R.', quote: 'The huggies look far more expensive than they are. I wear them almost daily.' },
  { name: 'Claire S.', quote: 'Beautiful packaging and such a soft gold tone. It made the perfect birthday gift.' },
  { name: 'Elena P.', quote: 'Elegant, light, and easy to layer. Velmora has become my go-to for little luxuries.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widerluxe text-velmora-bronze">Notes from customers</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Quietly Admired</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-velmora-line bg-velmora-porcelain p-7 text-velmora-ink shadow-sm">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-8 text-velmora-ink">“{testimonial.quote}”</blockquote>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxe text-velmora-taupe">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
