import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-parchment p-8 md:p-10 flex flex-col gap-5">
              <StarRating rating={t.rating} />
              <blockquote className="font-cormorant text-lg md:text-xl font-light text-charcoal leading-relaxed italic flex-1">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-divider">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-gold font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-inter text-xs text-stone-warm tracking-wide">{t.name}</span>
                <span className="ml-auto font-inter text-[10px] text-stone-light">Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
