import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ count = 5 }) {
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
    <section className="bg-obsidian py-20 lg:py-28">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="section-label text-gold/70 mb-3">Customer Love</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ivory">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-charcoal p-8 relative"
            >
              {/* Quote mark */}
              <span className="font-serif text-6xl text-gold/20 leading-none absolute top-4 left-6 select-none">
                "
              </span>

              <StarRating count={t.rating} />

              <p className="text-ivory/80 text-sm leading-relaxed mt-5 mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 border-t border-ivory/10 pt-5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-xs font-serif">{t.name[0]}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-ivory/60">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
