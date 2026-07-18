import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-velmora-dark/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subtitle">What they say</p>
          <h2 className="section-title mt-3">Loved by Thousands</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 md:p-8 shadow-soft hover:shadow-soft-hover transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-velmora-text leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="text-sm text-velmora-muted mt-4 font-sans tracking-wide">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
