import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products.js';
import { Stars } from '@/components/product/ProductCard.jsx';

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <div className="mb-10 text-center md:mb-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">
          Kind Words
        </p>
        <h2 className="mt-3 font-serif text-4xl font-medium text-espresso md:text-5xl">
          Loved & Worn Daily
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.name}
            className="flex flex-col border border-linen bg-ivory p-8 animate-fade-up"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <Quote className="h-6 w-6 text-bronze/50" strokeWidth={1} />
            <Stars rating={5} className="mt-4 h-4 w-4" />
            <blockquote className="mt-4 flex-1 font-serif text-xl italic leading-relaxed text-espresso">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 border-t border-linen pt-4 text-[11px] font-medium uppercase tracking-luxe text-mink">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
