import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} style={{ fill: '#C9A96E', color: '#C9A96E' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-champagne mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian mb-4">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-parchment px-8 py-10 border border-divider hover:border-champagne/30 transition-colors duration-300"
            >
              <StarRow />
              <blockquote className="font-cormorant text-lg font-light text-obsidian leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-champagne font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs uppercase tracking-widest text-stone">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center font-manrope text-xs text-stone/50 mt-10">
          ✦ Over 2,400 five-star reviews · Verified purchases only
        </p>
      </div>
    </section>
  );
}
