import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl">Kind Words</h2>
          <p className="text-taupe text-sm mt-2 font-sans">From our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-warm-cream/50 border border-taupe-pale animate-fade-in"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-base text-warm-black leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <p className="text-xs text-taupe font-sans font-medium mt-4 tracking-wider uppercase">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}