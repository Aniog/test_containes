import { Star } from 'lucide-react'
import { reviews } from '@/data/products'
import SectionHeader from './SectionHeader'

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Reviews" title="Quietly Loved" />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.id} className="border border-velmora-mist bg-velmora-linen p-7 text-velmora-espresso shadow-soft">
              <div className="mb-6 flex gap-1 text-velmora-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-serif text-3xl leading-tight text-velmora-espresso">“{review.text}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
