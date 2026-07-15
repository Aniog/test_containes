import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-gold text-gold' : 'text-divider'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-section-sm md:py-section bg-ivory">
      <div className="section-container">
        <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold text-center mb-2">
          Loved by Thousands
        </p>
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Real reviews from real women who wear Velmora every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-cream rounded-sm p-8 text-center"
            >
              <StarRating rating={review.rating} />
              <p className="font-sans text-sm text-charcoal leading-relaxed mt-4 mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal font-medium">
                {review.name}
              </p>
              <p className="font-sans text-xs text-warm-gray mt-1">
                {review.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
