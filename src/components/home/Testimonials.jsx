import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-600 text-xs tracking-widest uppercase font-medium mb-3">
            Real Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold-400/50 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-cream-100/60 p-6 lg:p-8">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-ink-700 text-sm leading-relaxed mb-4 font-serif italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs font-medium text-ink-500 tracking-wider uppercase">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}