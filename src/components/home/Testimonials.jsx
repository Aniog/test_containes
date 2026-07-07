import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-velmora-ivory px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Customer notes" title="Quiet praise, lasting shine" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-mist bg-white/45 p-7 shadow-[0_18px_45px_rgba(33,24,22,0.05)]">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 font-serif text-2xl leading-9 text-velmora-ink">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-sable">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
