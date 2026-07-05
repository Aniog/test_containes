import { Star } from 'lucide-react';
import { reviews } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 border-t border-cream-400/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">Reviews</p>
          <h2 className="serif-heading text-3xl md:text-4xl text-cream-100">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {reviews.map((review) => (
            <div key={review.name} className="bg-espresso-800 p-8 md:p-10 card-hover">
              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-cream-300/70 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-sm font-medium">{review.initial}</span>
                </div>
                <span className="text-xs text-cream-200 tracking-[0.04em]">{review.name} {review.initial}.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
