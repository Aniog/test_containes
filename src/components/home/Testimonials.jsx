import { TESTIMONIALS } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-sans uppercase tracking-ui text-gold mb-2">
            Reviews
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-espresso">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-cream p-6 md:p-8 border border-warm-gray animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <StarRating rating={testimonial.rating} size={14} />
              <p className="mt-4 text-sm md:text-base font-light text-espresso leading-relaxed">
                “{testimonial.text}”
              </p>
              <p className="mt-5 text-xs font-sans uppercase tracking-ui text-taupe">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
