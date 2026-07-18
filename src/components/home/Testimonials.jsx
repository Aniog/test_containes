import { Star } from 'lucide-react'
import SectionHeading from '@/components/home/SectionHeading.jsx'

const reviews = [
  { name: 'Maya R.', quote: 'The huggies feel expensive without being precious. I wear them almost every day.' },
  { name: 'Claire S.', quote: 'Bought the necklace as a birthday gift and the packaging made it feel so special.' },
  { name: 'Elena M.', quote: 'Soft gold, no irritation, and the perfect subtle sparkle for work dinners.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-pearl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Notes from customers" title="Quiet compliments, daily" text="Designed for real wardrobes, meaningful gifting, and repeat wear." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="border border-velmora-linen bg-velmora-ivory p-7 text-velmora-ink shadow-sm">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 font-serif text-2xl font-semibold leading-9 text-velmora-ink">“{review.quote}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-nav text-velmora-gold">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
