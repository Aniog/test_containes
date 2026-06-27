import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-text">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-velmora-text leading-relaxed italic max-w-sm mx-auto">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-5 text-xs tracking-[0.2em] uppercase text-velmora-text-muted font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
