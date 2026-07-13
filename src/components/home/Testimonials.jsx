import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#C9A96E" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col gap-4 p-8 bg-linen border border-sand">
              <StarRating count={t.rating} />
              <p className="font-serif text-lg font-light text-obsidian leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-sand">
                <p className="font-sans text-xs tracking-widest uppercase font-semibold text-ink-muted">
                  — {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
