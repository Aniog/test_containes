import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Stars = () => (
  <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="bg-velmora-cream py-24 md:py-32 border-t border-velmora-line">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4">
          Reviews
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink">
          From our community
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {testimonials.map((t) => (
          <figure key={t.id} className="text-center md:text-left">
            <Stars />
            <blockquote className="font-serif text-xl md:text-2xl font-light text-velmora-ink leading-snug mb-6">
              “{t.quote}”
            </blockquote>
            <figcaption className="text-xs uppercase tracking-[0.3em] text-velmora-muted">
              — {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
