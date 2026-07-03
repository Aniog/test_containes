import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">What Our Customers Say</h2>
        <p className="font-sans text-sm text-velmora-stone">Real reviews from real women</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="font-sans text-sm md:text-base text-velmora-cocoa leading-relaxed mb-5 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-stone">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
