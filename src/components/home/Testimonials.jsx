import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-parchment border-t border-blush">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-manrope uppercase tracking-widest text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 border border-blush">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg font-light text-charcoal leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-xs font-manrope font-medium text-gold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-manrope uppercase tracking-widest text-stone">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
