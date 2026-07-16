import { Star } from 'lucide-react'
import SectionIntro from '@/components/common/SectionIntro.jsx'

const reviews = [
  { name: 'Maya R.', text: 'The huggies feel expensive but are so easy to wear every day. The gold tone is beautiful.' },
  { name: 'Elena S.', text: 'Bought the necklace as a gift and ended up ordering one for myself. The packaging felt special.' },
  { name: 'Nora K.', text: 'Subtle, elegant, and comfortable. Exactly the kind of jewelry I wanted for work and weekends.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-pearl px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Customer notes" title="Loved for gifting, kept for daily wear." centered />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-3xl border border-velmora-line bg-velmora-ivory p-7 text-velmora-espresso shadow-card">
              <div className="mb-5 flex gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-display text-2xl leading-8 text-velmora-espresso">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-refined text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
