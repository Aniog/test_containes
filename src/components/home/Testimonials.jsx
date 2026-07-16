import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <h2 className="font-serif text-3xl lg:text-4xl text-center mb-2 text-charcoal">
        Loved by You
      </h2>
      <p className="text-center text-stone text-sm mb-12 tracking-wide">
        What our community is saying
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-charcoal/80 leading-relaxed italic mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-stone">
              {t.name} {t.initial}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
