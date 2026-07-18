import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[11px] tracking-[0.2em] uppercase text-velmora-muted mb-3">Reviews</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-black">What Our Customers Say</h2>
        <div className="w-12 h-px bg-velmora-gold/60 mx-auto mt-5" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-sm md:text-base text-velmora-muted italic leading-relaxed">"{t.text}"</p>
            <p className="mt-4 text-xs tracking-[0.12em] uppercase font-medium text-velmora-black">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
