import StarRating from '@/components/ui/StarRating'

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality exceeded my expectations. I wear my huggies every single day and they still look brand new.',
  },
  {
    id: 2,
    name: 'Jenna L.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful earrings. Perfect gift for my sister — she cried.',
  },
  {
    id: 3,
    name: 'Amira K.',
    rating: 5,
    text: 'Quiet luxury at an accessible price. The ear cuff is my new signature piece.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C49A6C]">
            Reviews
          </p>
          <h2 className="font-serif text-3xl text-[#1A1512] md:text-4xl">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-[#E4DDD4] bg-[#F6F3EF] p-8 transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={review.rating} size={16} />
              <p className="mt-5 text-[15px] leading-relaxed text-[#1A1512]">
                “{review.text}”
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.1em] text-[#6B6259]">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
