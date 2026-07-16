import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Maya R.', quote: 'The huggies feel weighty in the best way, but I forget I am wearing them by noon.' },
  { name: 'Leah S.', quote: 'I bought the Heirloom Set as a gift and the packaging made it feel so special.' },
  { name: 'Nina K.', quote: 'Beautiful shine, no irritation, and somehow it makes every outfit look intentional.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Notes from customers</p>
          <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-espresso md:text-6xl">Quiet praise, daily wear</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-velmora-sand bg-velmora-porcelain p-7 text-velmora-espresso shadow-soft">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-9 text-velmora-espresso">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa/70">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
