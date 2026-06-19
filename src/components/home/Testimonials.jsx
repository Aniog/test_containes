import { testimonials } from '../../data/products';
import StarRating from '../ui/StarRating';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-fg mb-3">
            Loved by Our Community
          </h2>
          <p className="text-sm text-muted-fg tracking-wide">
            Real reviews from real women.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="border border-border p-6 md:p-8 text-center"
            >
              <StarRating rating={review.rating} size="sm" />
              <p className="font-serif text-lg text-fg mt-4 leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="text-sm text-muted-fg mt-4 font-medium">
                {review.name}
              </p>
              <p className="text-xs text-border mt-1">
                {review.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
