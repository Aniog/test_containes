import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-charcoal font-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-brand-cream p-6 md:p-8 rounded-sm border border-brand-gold-muted/15"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-brand-stone leading-relaxed font-sans italic">
                "{review.text}"
              </p>

              {/* Name */}
              <p className="mt-4 text-xs tracking-wider uppercase font-sans font-medium text-brand-charcoal">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
