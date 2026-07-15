import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-ink">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 md:p-8 rounded-sm">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-taupe-600 font-sans text-sm leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs font-sans font-medium text-ink uppercase tracking-wider">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}