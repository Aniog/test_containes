import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">What They Say</h2>
          <p className="text-sm text-taupe">Loved by thousands of women worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div key={review.id} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-charcoal leading-relaxed mb-4 italic font-serif text-lg">
                "{review.text}"
              </p>
              {/* Name */}
              <p className="text-xs uppercase tracking-widest text-taupe font-sans font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
