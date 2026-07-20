import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 border-t border-taupe">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-4 h-4 text-gold" />
                ))}
              </div>

              <p className="font-sans text-sm text-stone leading-relaxed italic">
                "{t.text}"
              </p>

              <p className="font-sans text-xs uppercase tracking-wider text-charcoal mt-4 font-medium">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
