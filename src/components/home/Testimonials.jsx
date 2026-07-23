import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-charcoal-700 italic leading-relaxed mb-4">
                "{t.text}"
              </p>
              <p className="text-xs font-sans uppercase tracking-[0.15em] text-charcoal-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}