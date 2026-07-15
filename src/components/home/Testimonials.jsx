import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subtitle mb-3">Kind Words</p>
          <h2 className="section-title">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 md:p-8 border border-ink-border">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-ink-lighter leading-relaxed mb-6 font-serif italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <p className="font-sans text-xs tracking-wider uppercase text-ink font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}