import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="section-heading text-center">Loved by You</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#A68A56" className="text-accent" />
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs font-medium text-text-primary mt-4 tracking-wide uppercase">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
