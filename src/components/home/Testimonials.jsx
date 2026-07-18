import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">Loved by You</h2>
        <div className="w-10 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-mocha/80 text-sm leading-relaxed italic mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="text-xs tracking-wider uppercase text-espresso font-semibold">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
