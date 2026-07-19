import StarRating from '@/components/ui/StarRating'

const reviews = [
  {
    id: 1,
    name: 'Amelia S.',
    text: 'The quality is stunning for the price. I have worn my huggies every day for three months and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Chloe M.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophia L.',
    text: 'Quiet luxury indeed. These are my new everyday pieces — minimal enough for work, special enough for date night.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ivory">
      <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
            From Our Customers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Loved Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-cream p-8 md:p-10 text-center border border-stone"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-5 font-serif text-lg md:text-xl text-espresso italic leading-relaxed">
                “{review.text}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-taupe">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
