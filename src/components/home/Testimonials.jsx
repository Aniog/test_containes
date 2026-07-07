import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} className="text-champagne fill-champagne" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-parchment px-8 py-8 border border-champagne/10 hover:border-champagne/30 transition-colors duration-300"
            >
              <StarRow />
              <blockquote className="font-serif text-base md:text-lg font-light text-charcoal leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-champagne font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-xs uppercase tracking-widest text-stone font-medium">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="text-center mt-10">
          <p className="font-sans text-xs text-stone/60">
            4.8 average · 400+ verified reviews
          </p>
        </div>
      </div>
    </section>
  );
}
