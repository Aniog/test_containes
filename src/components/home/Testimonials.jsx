import { Star } from 'lucide-react'
import SectionIntro from '@/components/home/SectionIntro'

const reviews = [
  {
    name: 'Maya L.',
    quote: 'The Golden Sphere Huggies look far more expensive than they are. I wear them almost every day.',
  },
  {
    name: 'Elena R.',
    quote: 'I bought the Heirloom Set as a gift and the packaging felt beautiful, warm, and thoughtful.',
  },
  {
    name: 'Nadia S.',
    quote: 'Delicate without disappearing. The pieces catch light in the softest way.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-ink sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Kind words"
          title="Loved for gifting, kept for everyday."
          copy="Thousands of small rituals, made brighter by jewelry that feels considered and easy to wear."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-line bg-velmora-pearl p-7 text-velmora-ink shadow-none transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex gap-1" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-velmora-champagne text-velmora-champagne" strokeWidth={1.4} />
                ))}
              </div>
              <blockquote className="mt-7 font-serif text-2xl leading-snug text-velmora-ink">
                “{review.quote}”
              </blockquote>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
