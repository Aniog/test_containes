import { Star } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'

const reviews = [
  { name: 'Maya R.', text: 'The huggies feel substantial without being heavy. They make every outfit look more intentional.' },
  { name: 'Elena S.', text: 'Bought the necklace as a birthday gift and kept one for myself. The packaging is beautiful.' },
  { name: 'Claire T.', text: 'Soft gold, not too shiny, and no irritation. Exactly the everyday luxury I wanted.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream px-5 py-16 text-velmora-ink md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Kind words" title="Loved for the everyday glow" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-champagne/80 bg-velmora-ivory p-7 text-velmora-ink">
              <div className="flex gap-1 text-velmora-bronze" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.5} />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8 text-velmora-ink">“{review.text}”</p>
              <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cocoa">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
