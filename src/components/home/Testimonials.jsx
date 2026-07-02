import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} fill="#c9a96e" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-2">What they say</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink font-light">Loved by thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 lg:p-10 flex flex-col gap-5">
              <StarRow count={t.rating} />
              <p className="font-serif text-lg text-ink font-light leading-relaxed italic flex-1">
                "{t.text}"
              </p>
              <p className="font-sans text-[10px] tracking-widest uppercase text-muted">
                — {t.name}
              </p>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="#c9a96e" stroke="none" />
            ))}
          </div>
          <span className="font-sans text-xs text-muted">4.9 out of 5 · 400+ reviews</span>
        </div>
      </div>
    </section>
  );
}
