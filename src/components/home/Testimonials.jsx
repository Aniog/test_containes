import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream-dark">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-velmora-gold mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-[28px] md:text-[38px] font-light text-velmora-charcoal">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream rounded-sm p-7 md:p-8 hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              {/* Text */}
              <p className="font-serif text-[16px] md:text-[17px] italic text-velmora-charcoal leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Name */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velmora-cream-dark flex items-center justify-center">
                  <span className="font-sans text-[11px] font-medium text-velmora-warm-gray">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-[12px] font-medium text-velmora-charcoal tracking-wide">
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