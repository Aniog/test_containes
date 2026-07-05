import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subheading mb-3">Reviews</p>
          <h2 className="section-heading">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-white p-8 md:p-10 border border-brand-sand/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <p className="font-sans text-sm text-brand-charcoal leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="border-t border-brand-sand/50 pt-4">
                <p className="font-sans text-sm font-medium text-brand-charcoal">{review.name}</p>
                <p className="font-sans text-xs text-brand-warm-gray">on {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
