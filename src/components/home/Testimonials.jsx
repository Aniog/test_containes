import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-base">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-14 md:mb-20">
          <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-4">
            From Our Customers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-dark tracking-wide">
            Love Notes
          </h2>
          <div className="w-10 h-[1px] bg-velmora-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-accent text-velmora-accent" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-velmora-dark italic leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="font-sans text-xs tracking-wider uppercase text-velmora-subtle">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
