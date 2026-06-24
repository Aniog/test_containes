import { Star } from 'lucide-react';
import { reviews } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[28px] md:text-[32px] tracking-[0.08em] uppercase text-text-primary">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-[14px] text-text-secondary leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="text-[12px] uppercase tracking-[0.1em] text-text-muted mt-4">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
