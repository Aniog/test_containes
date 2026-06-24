import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2
            className="text-3xl md:text-4xl font-light text-velmora-cream"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-velmora-charcoal/50 border border-velmora-gold/10 p-8 space-y-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-velmora-cream/70 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-velmora-gold/10">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-xs font-medium text-velmora-gold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium tracking-[0.1em] text-velmora-cream/60">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
