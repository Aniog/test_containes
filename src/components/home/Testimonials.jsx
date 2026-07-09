import StarRating from '@/components/StarRating'

const testimonials = [
  {
    id: 1,
    name: 'Sarah L.',
    rating: 5,
    text: 'The quality exceeded my expectations. I have worn my huggies every day for three months and they still look brand new.',
  },
  {
    id: 2,
    name: 'Maya T.',
    rating: 5,
    text: 'Finally a demi-fine brand that feels premium without the luxury markup. The packaging is gorgeous too.',
  },
  {
    id: 3,
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. Elegant, timeless, and perfectly packaged.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-cream-50 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-10 text-center md:mb-14">
          <p className="label-uppercase mb-3 text-gold-600">Reviews</p>
          <h2 className="heading-display text-3xl md:text-5xl">Loved By You</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="border border-charcoal-900/8 bg-cream-100 p-8 transition-shadow hover:shadow-lg"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-5 text-base leading-relaxed text-charcoal-700">
                “{review.text}”
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-widest text-charcoal-900">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
