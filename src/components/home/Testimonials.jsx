import { Star } from 'lucide-react'
import SectionIntro from './SectionIntro.jsx'

const reviews = [
  { name: 'Maya R.', text: 'The huggies look far more expensive than they are. I wear them four days a week.' },
  { name: 'Claire T.', text: 'Beautiful gift packaging and the necklace has the softest gold tone. My sister loved it.' },
  { name: 'Nina S.', text: 'Quiet, polished, and comfortable. It is exactly the jewelry mood I wanted.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Notes from customers" title="Loved for daily rituals and gifts" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="border border-velmora-linen bg-velmora-cream p-7 shadow-soft">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 star rating">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-9 text-velmora-espresso">“{review.text}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
