import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs font-medium tracking-widest uppercase text-velmora-stone mb-3">Kind Words</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">What Our Customers Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-sm text-velmora-stone leading-relaxed italic mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}