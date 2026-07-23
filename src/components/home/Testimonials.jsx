import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-gold mb-3 font-sans">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">What They're Saying</h2>
          <div className="w-10 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-gold fill-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-serif text-lg font-light text-ink leading-relaxed italic">
                "{t.text}"
              </p>
              {/* Name */}
              <p className="text-xs tracking-widest uppercase text-ink-muted mt-auto">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
