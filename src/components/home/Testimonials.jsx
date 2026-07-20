import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const [ref, revealed] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`bg-warm-100 py-20 md:py-28 transition-all duration-700 ease-out ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-subtitle">Loved by You</p>
          <h2 className="section-title mt-3">Customer Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-cream p-8 md:p-10 text-center">
              <div className="flex justify-center gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="font-serif text-deep-600 italic leading-relaxed text-sm md:text-base">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="w-8 h-px bg-gold-300 mx-auto my-5" />
              <p className="font-sans text-xs tracking-wider uppercase text-deep-500 font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}