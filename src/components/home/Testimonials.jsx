import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-champagne font-medium mb-3">Reviews</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">What Our Customers Say</h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="bg-parchment p-8 border border-mist/60 relative">
              {/* Quote mark */}
              <span className="font-serif text-6xl text-champagne/30 leading-none absolute top-4 left-6 select-none">"</span>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-champagne fill-champagne" />
                ))}
              </div>

              <p className="font-serif text-base text-charcoal leading-relaxed mb-6 italic relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-champagne-dark font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-charcoal font-semibold">{t.name}</p>
                  <p className="font-sans text-[10px] text-stone">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
