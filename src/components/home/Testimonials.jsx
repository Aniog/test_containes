import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-obsidian">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <div key={t.id} className="relative">
              {/* Decorative quote */}
              <span className="font-serif text-6xl text-linen leading-none absolute -top-2 -left-1 select-none">
                "
              </span>

              <div className="pt-6">
                <StarRow rating={t.rating} />
                <p className="font-serif text-lg italic text-obsidian leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                    <span className="font-serif text-sm text-stone">{t.name[0]}</span>
                  </div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-stone">
                    {t.name}
                  </span>
                </div>
              </div>

              {/* Divider (not on last) */}
              {i < testimonials.length - 1 && (
                <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-linen" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
