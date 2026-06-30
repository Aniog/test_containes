import StarRating from '@/components/ui/StarRating'

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality exceeded my expectations. I wear my huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Elegant packaging, beautiful craftsmanship, and the necklace was even more stunning in person.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Olivia T.',
    text: 'I bought the Royal Heirloom Set as a gift and my sister absolutely loved it. Perfect for special occasions.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-base py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            Reviews
          </p>
          <h2 className="font-serif text-3xl tracking-wide sm:text-4xl">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ id, name, text, rating }) => (
            <div
              key={id}
              className="border border-velmora-taupe/30 bg-velmora-base-light p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <StarRating rating={rating} size={14} />
              <p className="mt-5 leading-relaxed text-velmora-ivory/90">
                &ldquo;{text}&rdquo;
              </p>
              <p className="mt-6 font-sans text-xs uppercase tracking-widest text-velmora-gold">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
