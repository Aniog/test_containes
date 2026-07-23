import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-2">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(review => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold" style={{ fill: 'currentColor' }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg md:text-xl font-light text-obsidian leading-relaxed italic flex-1 mb-5">
                "{review.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/40 mb-4" />

              {/* Name */}
              <p className="font-manrope text-xs uppercase tracking-widest text-stone">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
