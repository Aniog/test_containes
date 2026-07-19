import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            Loved by You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 border border-brand-taupe/50">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <p className="text-brand-warm-gray text-sm leading-relaxed font-light">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-brand-charcoal text-sm font-medium mt-4 uppercase tracking-[0.1em]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}