import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-obsidian-900/40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subtitle mb-3">Loved by Thousands</p>
          <h2 className="font-serif text-heading">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-obsidian-950/60 border border-obsidian-800/30 rounded-sm p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              <blockquote className="text-sm md:text-base text-obsidian-200 leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-obsidian-800 flex items-center justify-center text-xs font-medium text-gold-400 uppercase tracking-wider">
                  {t.name.charAt(0)}
                </div>
                <span className="text-sm text-obsidian-400">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
