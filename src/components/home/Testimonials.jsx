import StarRating from '@/components/ui/StarRating'

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality is stunning for the price. I wear my huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she cried. The packaging alone feels so luxe.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Olivia K.',
    text: 'Finally, demi-fine jewelry that does not irritate my sensitive ears. Beautiful, lightweight, and timeless.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-stone">
            From Our Community
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Loved by You
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="border border-line bg-warm-white p-8 transition-shadow duration-300 hover:shadow-md"
            >
              <StarRating rating={item.rating} size={14} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
                “{item.text}”
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-stone">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
