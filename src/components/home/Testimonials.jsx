import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-charcoal">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-surface border border-beige/40 p-6 md:p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-warm-gray leading-relaxed flex-1 font-serif italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <p className="text-xs uppercase tracking-widest text-warm-charcoal font-medium mt-4">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}