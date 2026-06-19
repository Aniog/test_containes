import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-deep-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="section-subheading">LOVE NOTES</p>
          <h2 className="section-heading mt-2">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-cream-100 p-8 rounded-sm text-center animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}
            >
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-deep-600 text-sm leading-relaxed italic">"{t.text}"</p>
              <p className="text-xs text-deep-400 mt-5 tracking-wide">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
