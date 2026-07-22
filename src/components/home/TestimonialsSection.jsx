import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-3">What They Say</h2>
          <div className="w-12 h-px bg-accent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="serif-heading text-xl md:text-2xl italic leading-relaxed mb-6 text-foreground">
                "{t.text}"
              </p>
              <p className="text-sm tracking-wider text-muted-foreground uppercase">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
