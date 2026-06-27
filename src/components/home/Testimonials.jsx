import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-14">
        <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)]">Testimonials</span>
        <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl mt-3 font-semibold">Loved by You</h2>
        <div className="w-12 h-px bg-[var(--color-accent)] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="text-center px-4 animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[var(--color-accent)] fill-[var(--color-accent)]" />
              ))}
            </div>
            <p className="text-[var(--color-text-secondary)] italic leading-relaxed mb-4 text-sm">&ldquo;{t.text}&rdquo;</p>
            <p className="font-[var(--font-serif)] text-sm font-semibold tracking-wide">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
