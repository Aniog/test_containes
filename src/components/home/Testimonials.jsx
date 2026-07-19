import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">Kind Words</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="p-8 bg-velvet-50 border border-velvet-200 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velvet-700 text-sm leading-relaxed flex-1 font-serif italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <p className="mt-4 text-xs tracking-[0.15em] uppercase text-velvet-500 font-sans">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}