import StarRating from '@/components/StarRating'

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality is incredible for the price. My huggies haven’t tarnished after months of daily wear.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a gift and she absolutely loved it. The packaging felt so premium.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Olivia K.',
    text: 'Quiet luxury exactly as described. Minimal, elegant, and easy to layer with everything I own.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Loved by You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-cream p-8 md:p-10 border border-velmora-sand"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-5 font-serif text-xl md:text-2xl text-velmora-ink leading-snug">
                “{review.text}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-velmora-taupe">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
