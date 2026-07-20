import { Star, Quote } from 'lucide-react';
import { reviews } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-display mb-4">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(review => (
            <div key={review.id} className="bg-surface rounded-xl p-8 relative">
              <Quote size={24} className="text-accent/20 mb-4" />
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-1.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < review.rating ? 'fill-accent text-accent' : 'text-border'}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">{review.name}</p>
                <p className="text-xs text-text-secondary">on {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
