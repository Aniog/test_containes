import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14 md:mb-16">
          <p className="caption mb-3">Reviews</p>
          <h2 className="heading-lg text-velmora-charcoal">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-sm md:text-base text-velmora-smoke leading-relaxed italic mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-wider uppercase text-velmora-charcoal font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
