import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-4">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-velmora-base/70 italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs tracking-wider uppercase text-velmora-muted font-sans">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}