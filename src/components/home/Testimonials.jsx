import StarRating from '@/components/products/StarRating'

const REVIEWS = [
  {
    id: 1,
    text: 'The quality exceeded my expectations. I wear my huggies every single day and they still look brand new.',
    name: 'Sarah L.',
    rating: 5,
  },
  {
    id: 2,
    text: 'Bought the Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.',
    name: 'Emily R.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Finally jewelry that looks expensive without the markup. The ear cuff is my new signature piece.',
    name: 'Maya T.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream border-y border-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {REVIEWS.map((review) => (
            <div key={review.id} className="text-center max-w-sm mx-auto">
              <div className="flex justify-center mb-4">
                <StarRating rating={review.rating} size={14} />
              </div>
              <p className="font-serif text-lg md:text-xl text-espresso italic leading-relaxed">
                "{review.text}"
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.14em] text-stone">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
