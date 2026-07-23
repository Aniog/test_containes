import { Star } from 'lucide-react'

export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-velmora-ivory px-5 py-20 text-velmora-onyx md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">Customer Notes</p>
          <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-onyx">Soft words, lasting shine.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.id} className="border border-velmora-mist bg-white/45 p-7 shadow-velmora-soft text-velmora-onyx">
              <div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-2xl leading-8 text-velmora-onyx">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-stone">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
