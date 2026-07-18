import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-900 tracking-wide">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-velvet-600 text-sm leading-relaxed italic">
              "{t.text}"
            </p>
            <p className="mt-4 text-xs tracking-widest uppercase text-velvet-500 font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}