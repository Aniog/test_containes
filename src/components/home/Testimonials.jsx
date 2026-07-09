import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 md:py-28 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              <StarRow />
              <blockquote className="font-serif text-lg md:text-xl font-light text-ink leading-relaxed flex-1 mb-6">
                "{t.text}"
              </blockquote>
              <div className="border-t border-linen pt-5">
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-ink">{t.name}</p>
                <p className="font-sans text-[11px] text-whisper mt-1">Verified Purchase · {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
