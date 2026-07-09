import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-2">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream p-8 md:p-10 flex flex-col gap-5 border border-velmora-stone/30 hover:border-velmora-gold/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-velmora-gold text-velmora-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg font-light italic text-velmora-charcoal leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center justify-between pt-4 border-t border-velmora-stone/40">
                <div>
                  <p className="font-manrope text-xs font-500 text-velmora-obsidian uppercase tracking-wide">{t.name}</p>
                  <p className="font-manrope text-[10px] text-velmora-mink mt-0.5">Verified Purchase · {t.product}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-velmora-gold font-light">
                    {t.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
