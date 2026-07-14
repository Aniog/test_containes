import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-widest text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-velmora-cream p-8 border border-velmora-stone/15 hover:border-velmora-gold/30 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(201,169,110,0.1)]"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={12} stroke="#C9A96E" fill="#C9A96E" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg italic text-velmora-obsidian leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velmora-sand flex items-center justify-center">
                  <span className="font-cormorant text-sm text-velmora-obsidian font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-inter text-xs uppercase tracking-widest text-velmora-mist">
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
