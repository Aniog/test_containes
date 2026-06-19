import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="serif-heading text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="text-velvet-600 italic leading-relaxed mb-5 text-sm">"{t.text}"</p>
            <p className="text-xs tracking-[0.1em] uppercase text-velvet-800 font-medium">
              {t.name} {t.initial}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
