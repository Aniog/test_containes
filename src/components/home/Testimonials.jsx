import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-warmgray-500 mb-3">Customer Love</p>
        <h2 className="font-serif text-3xl md:text-4xl text-noir">What They Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center px-4">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-sand-400 text-sand-400" />
              ))}
            </div>
            <p className="font-serif text-sm md:text-base text-warmgray-800 italic leading-relaxed mb-4">
              "{t.text}"
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-noir font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}