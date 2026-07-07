import { StarRating } from '@/components/ui/StarRating'

const testimonials = [
  {
    id: 1,
    name: 'Sarah K.',
    text: 'The quality is stunning for the price. I wear my huggies every day and they still look brand new after months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michelle R.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jenny L.',
    text: 'Finally, demi-fine jewelry that does not irritate my sensitive skin. Elegant, minimal, and just beautiful.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-gold">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl text-espresso md:text-4xl">
            What They Are Saying
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-mist bg-parchment/50 p-8 text-center transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating
                rating={testimonial.rating}
                size={14}
                showValue={false}
                className="justify-center mb-4"
              />
              <p className="font-serif text-lg italic leading-relaxed text-espresso">
                “{testimonial.text}”
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.14em] text-taupe">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
