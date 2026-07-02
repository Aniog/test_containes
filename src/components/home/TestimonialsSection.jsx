import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">What Our Customers Say</p>
          <h2 className="section-title">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review, i) => (
            <div
              key={review.id}
              className="bg-ivory-50 p-6 md:p-8 rounded-sm border border-charcoal-100 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm text-charcoal-700 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-charcoal-100 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal-900">
                  {review.name}
                </p>
                <p className="font-sans text-xs text-charcoal-400 mt-0.5">
                  Purchased: {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
