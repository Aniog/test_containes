import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Elena M.',
    text: 'The Golden Sphere Huggies haven’t left my ears in months. They feel weightless but look so substantial — exactly the quiet-luxury vibe I wanted.',
  },
  {
    name: 'Priya S.',
    text: 'Gifted the Royal Heirloom Set to my sister and she cried. The packaging alone feels like a treasure. Quality far beyond the price.',
  },
  {
    name: 'Camille R.',
    text: 'I was nervous about gold-plated, but the finish on the Amber Lace has held up beautifully. Compliments every single time I wear them.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Words From Our Wearers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="bg-cream/60 border border-sand/70 p-8 md:p-9 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-snug italic flex-1">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
