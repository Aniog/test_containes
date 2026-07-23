import { Star } from 'lucide-react';
import { reviews } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="section-heading">Loved by You</h2>
        <p className="section-sub">Hear from our community.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-sm">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-text-secondary font-sans text-sm leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              <p className="text-sm font-sans font-medium text-text-primary uppercase tracking-wider">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
