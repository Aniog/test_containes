import { StarRating } from '@/components/ui/StarRating'

const TESTIMONIALS = [
  {
    id: 1,
    text: 'The quality is stunning for the price. I wear my Golden Sphere Huggies almost every day and they still look brand new.',
    author: 'Maya L.',
    rating: 5,
  },
  {
    id: 2,
    text: 'Bought the Royal Heirloom Set as a birthday gift and the packaging alone made it feel so luxurious. She loved it.',
    author: 'Sophie K.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Quietly elegant. Exactly the kind of jewelry I want to be seen in — special, but not trying too hard.',
    author: 'Danielle R.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-28 bg-velvet-secondary border-y border-cream/8">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-3">
            From Our Community
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">Kind Words</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-velvet p-6 md:p-8 border border-cream/8 flex flex-col"
            >
              <StarRating rating={item.rating} showValue={false} size={14} />
              <p className="mt-5 text-cream/90 text-sm md:text-base leading-relaxed flex-1">
                "{item.text}"
              </p>
              <p className="mt-6 font-sans text-xs uppercase tracking-[0.16em] text-warm-gray">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
