import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal text-center mb-12">
          What They're Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 border border-taupe/15">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
