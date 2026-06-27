import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-charcoal tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4 mb-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-white p-6 sm:p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
                  />
                ))}
              </div>

              <p className="text-velmora-warm-brown leading-relaxed mb-6 text-sm sm:text-base italic">
                "{t.text}"
              </p>

              <div>
                <p className="font-serif text-lg text-velmora-charcoal">{t.name}</p>
                <p className="text-xs text-velmora-taupe mt-1 tracking-wider">
                  {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
