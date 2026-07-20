import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Amelia L.',
    text: 'The quality is unreal for the price. I wear my huggies every single day and they still look brand new.',
  },
  {
    id: 2,
    name: 'Sarah K.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she genuinely teared up. Beautiful packaging too.',
  },
  {
    id: 3,
    name: 'Maya T.',
    text: 'Finally, demi-fine jewelry that feels elevated but not intimidating. Obsessed with the ear cuff.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-velmora-muted mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text tracking-wide">
            What They’re Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-velmora-surface p-8 md:p-10 border border-velmora-border"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="text-velmora-text leading-relaxed mb-6">
                “{review.text}”
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-velmora-muted">
                — {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
