import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium mb-3">
          Loved by You
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-velvet-900 font-light">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="text-velvet-700 text-sm leading-relaxed italic mb-5">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="text-[11px] tracking-wider uppercase text-velvet-500 font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
