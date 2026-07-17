import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28 bg-warmwhite">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deepbrown leading-tight">Words From Our Women</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-lg md:text-xl text-deepbrown italic leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <cite className="font-sans text-xs tracking-[0.12em] uppercase text-mocha not-italic">
                — {t.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
