import { StarRating } from '@/components/ui/StarRating'

const testimonials = [
  {
    id: 1,
    name: 'Elena M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies almost every day and they still look brand new.',
  },
  {
    id: 2,
    name: 'Sophia L.',
    rating: 5,
    text: 'I bought the Royal Heirloom Set as a birthday gift and the packaging alone made it feel so premium. She loved it.',
  },
  {
    id: 3,
    name: 'Maya T.',
    rating: 5,
    text: 'Finally, demi-fine jewelry that feels elevated without being overpriced. The Amber Lace Earrings are absolutely stunning.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Customer Love</p>
          <h2 className="mt-3 font-serif text-3xl tracking-wide text-espresso sm:text-4xl md:text-5xl">
            What She Wears
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-champagne bg-cream-light p-8 transition-shadow duration-300 hover:shadow-soft"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-espresso">
                “{t.text}”
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-taupe">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
