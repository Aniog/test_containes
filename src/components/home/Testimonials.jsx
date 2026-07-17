import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="container-wide section-padding">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-super uppercase text-velmora-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              <p className="text-sm text-velmora-charcoal/80 leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-sm text-velmora-ink tracking-wide">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}