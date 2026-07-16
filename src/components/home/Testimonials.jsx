import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-taupe mb-3">
          Loved By You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-soft-black font-normal">
          What Our Customers Say
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="text-center px-4"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-taupe leading-relaxed italic mb-5">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-soft-black font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
