import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <p className="text-center text-[10px] tracking-[0.3em] uppercase text-warm-400 mb-3">
        Reviews
      </p>
      <h2 className="section-title text-center mb-14">What Our Customers Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center px-4">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-warm-600 leading-relaxed mb-4 italic">
              "{t.text}"
            </p>
            <p className="text-xs tracking-wider uppercase text-warm-900 font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}