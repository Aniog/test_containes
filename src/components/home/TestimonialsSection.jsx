import { Quote } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Stars from '@/components/ui/Stars'

const REVIEWS = [
  {
    quote:
      'The Sphere huggies are the first earrings I have owned that my sensitive ears actually tolerate. I have not taken them off in three months.',
    name: 'Sophie M.',
    detail: 'Golden Sphere Huggies',
  },
  {
    quote:
      'Bought the Heirloom set for my mother’s birthday — the box alone made her cry. The gold looks far more expensive than it is.',
    name: 'Amara L.',
    detail: 'Royal Heirloom Set',
  },
  {
    quote:
      'Quiet, elegant, and they photograph beautifully. The Flora Nectar necklace is now my everyday signature piece.',
    name: 'Elena R.',
    detail: 'Majestic Flora Nectar',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Kind words"
        title="Treasured by Thousands"
      />
      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-7">
        {REVIEWS.map((review) => (
          <figure
            key={review.name}
            className="reveal flex flex-col border border-line bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold md:p-8"
          >
            <Quote className="h-6 w-6 text-gold-soft" strokeWidth={1.25} />
            <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-ink">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-5">
              <Stars value={5} className="h-3.5 w-3.5" />
              <p className="mt-2 text-sm font-semibold text-ink">{review.name}</p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Verified buyer · {review.detail}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
