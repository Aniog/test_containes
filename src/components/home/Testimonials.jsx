import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="section-heading">Loved by You</h2>
        <p className="section-subhead">Hear from the women who wear Velmora.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center px-4">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-sm md:text-base text-velmora-charcoal leading-relaxed italic font-light">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="mt-4 text-xs tracking-widest uppercase text-velmora-stone font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
