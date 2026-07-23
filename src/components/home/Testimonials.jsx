import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const reviews = [
  { name: 'Maya R.', quote: 'The Golden Sphere Huggies look far more expensive than they are. I wear them nearly every day.' },
  { name: 'Elena P.', quote: 'Beautiful packaging and the necklace had the prettiest warm shine. It felt very special to gift.' },
  { name: 'Jules M.', quote: 'Finally jewelry that feels elegant but not precious. Lightweight, polished, and easy to layer.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream px-5 py-20 text-velmora-ink lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading idPrefix="testimonials" eyebrow="Customer notes" title="Softly spoken, often worn" />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-sand bg-velmora-pearl p-7 shadow-card">
              <div className="mb-5 flex text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold-deep">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
