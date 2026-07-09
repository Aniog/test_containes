import { Star } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  return (
    <section className="bg-velmora-ivory px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Loved quietly" title="Notes from the Velmora circle" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.id} className="rounded-[2rem] border border-velmora-sand bg-velmora-porcelain p-7 text-velmora-espresso shadow-sm">
              <div className="mb-5 flex gap-1 text-velmora-champagne" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-serif text-2xl leading-8 text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-umber">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
