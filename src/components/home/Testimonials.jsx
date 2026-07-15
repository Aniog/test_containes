import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-[11px] tracking-widest3 uppercase text-warm-600 mb-4">
          Love Letters
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900">
          What Our Customers Say
        </h2>
        <div className="w-12 h-px bg-warm-400 mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-warm-500 text-warm-500" />
              ))}
            </div>
            <p className="text-charcoal-600 leading-relaxed italic text-sm md:text-base mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-serif text-sm font-semibold tracking-wider text-charcoal-900">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
