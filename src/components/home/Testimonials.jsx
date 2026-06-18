import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-3">
            Reviews
          </p>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-ink">
            From the Velmora circle
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="bg-cream p-8 md:p-10 flex flex-col"
            >
              <div className="flex gap-1 text-champagne mb-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-champagne"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-ink leading-relaxed flex-1">
                “{t.text}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-mute">
                — {t.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
