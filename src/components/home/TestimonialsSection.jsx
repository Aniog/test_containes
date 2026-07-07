import { testimonials } from '@/data/products';
import { StarRating } from '@/components/ui/StarRating';

export function TestimonialsSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Reviews
          </p>
          <h2 className="font-serif text-3xl font-light text-charcoal md:text-4xl">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-ivory p-8 shadow-soft transition-shadow duration-300 hover:shadow-glow"
            >
              <StarRating rating={review.rating} showCount={false} />
              <p className="mt-5 font-serif text-lg font-light italic leading-relaxed text-charcoal">
                “{review.text}”
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-widest text-warm-gray">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
