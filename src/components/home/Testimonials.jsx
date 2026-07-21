import { Star } from 'lucide-react'
import SectionHeader from './SectionHeader'

const reviews = [
  {
    quote: 'The huggies look far more expensive than they are. I wear them every day and they still feel special.',
    name: 'Maya R.',
  },
  {
    quote: 'Bought the necklace as a gift, then ordered one for myself. The packaging made it feel so considered.',
    name: 'Elena M.',
  },
  {
    quote: 'Quiet, warm, and elegant. Exactly the kind of jewelry I wanted for work and weekends.',
    name: 'Nina S.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Reviews" title="Loved in the everyday" align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-mist bg-velmora-cream p-7 text-velmora-espresso shadow-soft">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-velmora-champagne" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-snug text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-umber">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
