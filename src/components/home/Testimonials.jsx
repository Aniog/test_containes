import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A96E" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-obsidian font-light">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="flex flex-col gap-5 p-8 bg-velmora-cream border border-velmora-mist/30"
            >
              <StarRow count={t.rating} />
              <p className="font-serif text-lg text-velmora-obsidian font-light leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-velmora-mist/40">
                <p className="font-sans text-xs tracking-widest uppercase text-velmora-ash">
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
