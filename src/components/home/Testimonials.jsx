import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet font-medium">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-warm-white p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-velvet text-sm leading-relaxed font-light flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.15em] text-taupe font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
