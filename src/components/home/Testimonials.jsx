import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="font-serif text-2xl md:text-3xl text-center text-espresso tracking-wide">
          Loved by You
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white p-8 text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-star text-star" />
                ))}
              </div>
              <p className="text-sm text-taupe leading-relaxed italic">"{t.text}"</p>
              <p className="text-xs text-espresso font-medium mt-4 uppercase tracking-widest">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
