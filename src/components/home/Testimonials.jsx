import { Star } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="bg-velmora-pearl px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Reviews" title="Notes from the jewelry box" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-sand bg-velmora-porcelain p-6 text-velmora-ink shadow-sm">
              <div className="flex gap-1 text-velmora-goldDark" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 font-serif text-3xl leading-9 text-velmora-ink">“{review.quote}”</blockquote>
              <p className="mt-6 text-xs font-bold uppercase tracking-label text-velmora-cocoa/75">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
