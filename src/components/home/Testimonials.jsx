import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink font-light uppercase tracking-wider">
            Kind Words
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="text-center p-8 border border-beige">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-taupe text-sm leading-relaxed font-light italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest text-ink mt-5 font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}