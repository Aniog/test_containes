import { Star } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'

const reviews = [
  {
    name: 'Maya R.',
    quote: 'The huggies look expensive without feeling precious. I wear them through workdays and dinners.',
  },
  {
    name: 'Elena K.',
    quote: 'I bought the necklace as a birthday gift and the packaging felt so thoughtful and elevated.',
  },
  {
    name: 'Nora S.',
    quote: 'Quiet, warm, and beautifully made. The pieces layer with everything I already own.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Loved by customers" title="Soft Shine, Real Rituals" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-line bg-velmora-ivory p-7 shadow-sm">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-snug text-velmora-ink">“{review.quote}”</blockquote>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
